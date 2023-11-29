import { Link } from "react-router-dom";
import img from '../../../public/logo (1).png'
import { useContext } from "react";
import { AuthContext } from "../../components/Authprovider/AuthProvider";
import { Swal } from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const nav = <>
        < li > <Link to={'/'}>Home</Link></li>
        < li > <Link to={'/apartment'}>Apartment</Link></li>
        {user ? (
            null
        ) : <li><Link to="/login">Login</Link></li>}
    </>
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire("Logout successfully");
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-white text-black font-bold font-Poppins">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <div className="w-40">
                    <img src={img} alt="Lakeview Cottage" />
                    <p>Lakeview Cottage</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="photoURL" src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 md:mt-6 z-[1] p-2 bg-white text-black shadow menu menu-sm dropdown-content  rounded w-52">
                        {
                            user ? (
                                <>
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}
                                        </a>
                                    </li>
                                    <li><Link to='/dashboard/profile'>Dashboard</Link></li>
                                    <li>
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </>
                            ) : (
                                <li><Link to="/login">Login</Link></li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;