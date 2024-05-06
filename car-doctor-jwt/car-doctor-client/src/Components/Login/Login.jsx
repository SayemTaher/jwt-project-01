import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../../Utilities/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
const Login = () => {
    const {signIn,signInWithGoogle,signInWithGitHub} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result => {
            
            const loggedInUser = result.user 
            console.log(loggedInUser)
            toast.success("Successfully logged In");
                 navigate(location?.state ? location.state : "/");
                //  get access token 
                

        })
        .catch(error => {
            console.log('error:', error.message)
        toast.error(error.message)
    })

    }
    const handleGitHubLogin = () => {
        signInWithGitHub()
            .then(result => {
                 console.log(result.user);
                 toast.success("Success! You will now be redirected");
                 navigate(location?.state ? location.state : "/");
            
            })
            .catch(error => {
                console.log('error:', error.message)
            toast.error(error.message)
        })
        
    }

    const handleSignIn = e =>{
        e.preventDefault()
        const form = e.target 
        const password = form.password.value 
        const email = form.email.value 
        const  user = {email,password} 
        console.log(password,email,user)

        signIn(email,password)
        .then(result => {
            console.log(result)
            toast.success('Signed In Successfully!!')
            
            const user = {email}
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            .then(res =>{
                console.log(res.data)
                if(res.data.success){
                    navigate(location.state?location.state:'/')
                }
            })
            
        } )
        .catch(error =>{
            toast.error(error.message)
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
                        <h1 className="text-4xl font-bold text-orange-500">Sign In</h1>
                        <form className="card-body" onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-2">New here? 
                                <Link to='/register' className=" text-orange-600"> Register </Link>
                            </div>
                            <div className="flex justify-center gap-3 items-center">
                                <button className="  p-2 rounded-full hover:bg-orange-500 bg-gray-100  w-[150x]" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></button>
                                <button className="p-2 rounded-full hover:bg-orange-500 bg-gray-100  w-[150x]" onClick={handleGitHubLogin}><FaGithub></FaGithub></button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Login;