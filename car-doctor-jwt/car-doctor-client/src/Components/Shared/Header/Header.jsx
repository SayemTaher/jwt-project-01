import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../../Utilities/AuthProvider/AuthProvider";
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => { 
        logOut()
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Logged out successfully!',
                icon: 'success',
                confirmButtonText: 'Close'
              })
              navigate('/')

        })
        .catch(error => {
            console.log(error)
        })

    }
    const navLinks = (
        <div className="flex gap-2 items-center" id="navLinks">
            <ul className="flex gap-2 items-center">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/maintainance'>Maintenance</Link></li>
                {user ? (
                    <>
                       
                        <li><Link to='/appointments'>Appointments</Link></li>
                        <li><Link to='/logout' onClick={handleLogout}>Logout</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to='/login'>SignIn</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </>
                )}
            </ul>
        </div>
    );

    
    return (
        <div className="navbar  bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div><Link to='/' className="btn btn-ghost text-xl"><img className="w-[60px] object-cover" src="https://i.ibb.co/3SrmHzW/car.png" alt="logo" /></Link></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/details'><button className="btn btn-outline btn-secondary">Appointment</button></Link>

            </div>
        </div>
    );
};

export default Header;