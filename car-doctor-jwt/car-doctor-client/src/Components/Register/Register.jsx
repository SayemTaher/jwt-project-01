import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Utilities/AuthProvider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const password = form.password.value
        const photoUrl = form.photo.value
        const email = form.email.value
        
        console.log(name, email, password,photoUrl)

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            toast.error('Password should be 6 characters long with an uppercase and a lowercase letter.');
            return;
        }

        createUser( email ,password)
            .then(() => {
                toast.success('User Created Successfully!!');

                setEmail('')
                setName('')
                setPhotoUrl('')
                setPassword('')
                navigate('/')
            })
            .catch(error => {
                console.log('Error: ', error.message)
                toast.error(error.message);
            })




    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col flex gap-5 lg:flex-row justify-center">
                    <div>
                        <img className="w-[600px]" src="https://i.ibb.co/559wF2c/Screenshot-2024-05-03-at-19-22-12.png" alt="img" />
                    </div>

                    <div className="card shrink-0 w-full text-center p-5   max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-orange-500">Register Here</h1>
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} name="photo" placeholder="https://example.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value.trim())} name="email" placeholder="email" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="mt-2">Already have an account?
                                <Link to='/login' className=" text-orange-600"> SignIn </Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Register;



