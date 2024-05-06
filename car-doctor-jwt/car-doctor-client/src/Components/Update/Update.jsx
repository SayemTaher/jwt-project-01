import { useContext } from "react";
import { AuthContext } from "../../Utilities/AuthProvider/AuthProvider";


const Update = () => {
    const {user } = useContext(AuthContext)
    
    return (
        <div className="text-center">
        <h1 className="text-4xl font-bold pb-5">Make an Appointment</h1>
        <div className="flex flex-col justify-center items-center mt-5 mb-5">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" >
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

export default Update;