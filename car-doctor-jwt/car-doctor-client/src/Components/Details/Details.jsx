import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Utilities/AuthProvider/AuthProvider";

import Swal from 'sweetalert2'
const Details = () => {
    const data = useLoaderData()
    const {user} = useContext(AuthContext)
    const { title, _id, price,img } = data

    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target 
        const email = user?.email
        const name = form.name.value 
        const message = form.message.value 
        const dueAmount = form.price.value 
        const date = form.date.value
        

        const updatedData = {
            client_name:name,client_email:email,note:message,order_date:date,due_amount:dueAmount,img,service_title:title,service_id:_id
        }
        console.log(updatedData)
        fetch('http://localhost:5000/appointments',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedData)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'New Spot added successfully!',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        })
        
         
    }
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold pb-5">Make an Appointment</h1>
            <div className="flex flex-col justify-center items-center mt-5 mb-5">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleCheckout}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="border-2 p-3 border-gray-200 rounded-xl" name="message"></textarea>
                            
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="name" className="input input-bordered" required />

                            {/* <textarea className="border-2 border-gray-200 rounded-xl" name="date"  id="" cols="30" rows="10"></textarea> */}
                            
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Due Amount" className="input input-bordered" required />

                            {/* <textarea className="border-2 border-gray-200 rounded-xl" name="date"  id="" cols="30" rows="10"></textarea> */}
                            
                           
                        </div>
                        
                        <div className="form-control mt-6">
                            <input type="submit" value="Confirm Checkout" className="btn text-white btn-primary" ></input>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Details;