const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// middleware 

app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))
app.use(express.json()) 
app.use(cookieParser())

// custom middlewares 

const logger = async(req,res,next ) => {
    console.log('called:' , req.host, req.originalUrl)
    next()
}
// verify token 

const verifyToken = async(req,res,next) => {
    const token = req.cookies?.token 
    console.log('Token received :', token)
    if(!token){
        return res.status(401).send({message:'not authorized'})
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err){
            console.log(err)
            return res.status(401).send({message:'unauthorized'})
        }
        console.log('Token found with code: ',decoded)
        req.user = decoded
        next()
    })
    
}

// database connect 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vybo3pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const servicesCollection = client.db('car-doctor').collection('services')
    const appointemntsService = client.db('car-doctor').collection('appointments')

    // API to get user 
    app.post('/jwt',logger, async(req,res) => {
        const user = req.body
        console.log(user)
        const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
        res.cookie('token',token,{
            httpOnly : true,
            secure:true,
            sameSite:'none'
        })
        .send({success:true})
    })
//services related api
    app.get('/services',logger, async(req,res) => {
        const cursor = servicesCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })
    // read the data based on specific id for checkout/details form  

    app.get('/services/:id', async(req,res) =>{
        const id = req.params.id 
        const query = {
            _id: new ObjectId(id)
        }
        const options = {
            projection:{title:1,price:1,service_id:1,img:1}
        };
        const result = await servicesCollection.findOne(query,options)
        res.send(result)
    })
    // create appointment data

    app.post('/appointments',logger, async(req,res)=>{
        const data = req.body 
        console.log(data)
        const result = await appointemntsService.insertOne(data)
        res.send(result)
        
    })
    // get data for specific user email 
    app.get('/appointments',logger,verifyToken, async(req,res) =>{
        if(req.query.client_email !== req.user.email){
            return res.status(403).send({message:'forbidden access'})

        }
        let query = {};
        if(req.query?.client_email){
            query = {client_email:req.query.client_email}
        
        }
        const result = await appointemntsService.find(query).toArray()
        res.send(result)
        console.log(req.query)
        // console.log(req.cookies.token)

    })
    // delete specific data 
    app.delete('/appointments/:id', async(req,res)=>{
        const id = req.params.id 
        const query = {_id: new ObjectId(id)}
        const result = await appointemntsService.deleteOne(query)
        res.send(result)
    })

    // update data 
    app.patch('/appointments/:id', async(req,res)=>{
        const id = req.params.id
        const filter = {_id:new ObjectId(id)}
        const updatedBody = req.body
        const updateDoc = {
            $set:{
                status:updatedBody.status
            }
        }
        const result =await appointemntsService.updateOne(filter,updateDoc)
        res.send(result)
        console.log(updatedBody)
    })


    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req,res)=>{
    res.send('Server is running')
})
app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`)
})
