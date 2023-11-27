import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-black font-Poppins flex md:mt-10 h-[80vh]">
                <div className="w-64 min-h-full bg-gray-200">
                    <ul className="menu p-6 text-xl">
                        {/* <li><NavLink to='/'>Home</NavLink></li> */}
                        <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                        <li><NavLink to='/dashboard/Announcements'>Announcements</NavLink></li>
                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;

// <div className="w-full uppercase">
{/* <h1 className="text-2xl h-[80vh] text-center font-bold">Welcome to dashboard <br />mr.  {user?.displayName}</h1>
</div> */}