/* eslint-disable react/prop-types */

// import { FaPencil } from "react-icons/fa6";
import { ImBin } from "react-icons/im";

const Appointment = ({ data,handleDelete,handleUpdate }) => {
    const {_id, client_name, client_email, order_date, due_amount,status } = data
    
    
    
    return (

        
            <tbody>
                <tr className="bg-white">
                    <th>{client_name}</th>
                    <td>{client_email}</td>
                    <td>{order_date}</td>
                    <td className="text-blue-500"> € {due_amount}</td>
                    {
                        status === 'confirm' ?  <td> <button className=" text-lg font-bold  text-blue-600" >Confirmed</button></td>     :    <td> <button className="btn text-xl btn-primary text-white" onClick={()=>handleUpdate(_id)}>Confirm</button></td>             }
                    
                    <td><button className="btn text-xl btn-error text-white" onClick={()=>handleDelete(_id)}><ImBin></ImBin></button></td>
                    

                    
                </tr>
            </tbody>








        


    );
};

export default Appointment;