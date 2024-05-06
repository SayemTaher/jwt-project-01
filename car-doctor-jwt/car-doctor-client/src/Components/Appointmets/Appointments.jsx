import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Utilities/AuthProvider/AuthProvider";
import Appointment from "./Appointment";
import axios from 'axios';
import Swal from "sweetalert2";
const Appointments = () => {
    const { user } = useContext(AuthContext)
    const [getUserData, setUser] = useState([])
// ${user?.email}
    const url = `http://localhost:5000/appointments?client_email=${user?.email}`
    useEffect(() => {
        //using axios  
        axios.get(url,{withCredentials:true})
        .then(res => {
            setUser(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setUser(data)
        //     })

    }, [url])
    const handleUpdate = id =>{
        fetch(`http://localhost:5000/appointments/${id}`,{
            method:'PATCH',
            headers:{
                 'content-type' : 'application/json'
            },
            body:JSON.stringify({status:'confirm'})

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = getUserData.filter(data => data._id !== id)
                const updatedData = getUserData.find(data => data._id === id)
                updatedData.status = 'confirm'
                const newAppointment = [updatedData, ...remaining]
                setUser(newAppointment)

            }
            
        })
    }
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/appointments/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = getUserData.filter(data => data._id !== id)
                            setUser(remaining)

                        }
                    })


            }
        });
    }
    return (
        <div className="mt-5 mb-5">
            <h1 className="text-4xl font-bold ">Upcoming Appointments - {getUserData.length}</h1>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto mt-10 bg-gray-100 p-3 rounded-xl">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Due</th>
                                <th>Status</th>
                                <th>Delete Data</th>
                               
                            </tr>
                        </thead>
                        
                            {
                                getUserData.map(data => <Appointment key={data._id} data={data} handleUpdate={handleUpdate} handleDelete={handleDelete}></Appointment>)
                            }

                    </table>
                </div>

            </div>


        </div>
    );
};

export default Appointments;