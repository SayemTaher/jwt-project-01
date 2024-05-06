/*
--install jwt from jwt.io
--use jwt.sign(payload,secret,signature)
    eg: jwt.sign(payload,secret,{expiresIn:})
-- send the token to client server

---store the token in the client side [ 3 possible ways are out there]

1. memory 
2. local storage 
3. cookies // http only 

-- set cookies with http only 
-- for development keep:secure :false 
2. cors -- {app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true}
}))
3. client side axios settings
-- use {withCredentials:true}

1. to send the cookies from the client make sure you add with credentials : true using axios 
2. use cookie-parser as middleware to be able to get the cookie from the client 




*/ 


