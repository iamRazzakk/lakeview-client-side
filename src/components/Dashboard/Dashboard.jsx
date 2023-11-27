import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-black font-Poppins flex md:mt-10">
                <div className="w-64 h-full bg-gray-200">
                    <ul className="menu">
                        {/* <li><NavLink to='/'>Home</NavLink></li> */}
                        <li><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
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