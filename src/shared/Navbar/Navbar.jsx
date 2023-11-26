import { Link } from "react-router-dom";
import img from '../../../public/logo (1).png'

const Navbar = () => {
    const nav = <>
        < li > <Link to={'/'}>Home</Link></li>
        < li > <Link to={'/apartment'}>Apartment</Link></li>
        < li > <Link to={'/login'}>Login</Link></li>
    </>
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
                            <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 md:mt-6 z-[1] p-2 bg-white text-black shadow menu menu-sm dropdown-content  rounded w-52">
                        <li>
                            <a className="justify-between">
                                Name
                            </a>
                        </li>
                        <li><Link to={'dashboard'}>Dashboard</Link></li>
                        <li><Link to={'logout'}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;