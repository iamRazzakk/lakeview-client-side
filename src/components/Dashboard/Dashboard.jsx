import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
// import { useContext } from "react";
// import { AuthContext } from "../Authprovider/AuthProvider";
import useAdmin from "../Hook/useAdmin";


const Dashboard = () => {
    // const { user } = useContext(AuthContext);
    const [isAdmin] =useAdmin();
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-black font-Poppins flex md:mt-10 h-[80vh]">
                <div className="w-64 max-h-full bg-gray-200">
                    <ul className="menu p-6 text-xl">
                        {/* <li><NavLink to='/'>Home</NavLink></li> */}
                        {
                            isAdmin ? <>
                                <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/member'>Manage Members</NavLink></li>
                                <li><NavLink to='/dashboard/Announcements'>Announcements</NavLink></li>
                                <li><NavLink to='/dashboard/agreement'>Agreement Requests</NavLink></li>
                                <li><NavLink to='/dashboard/coupons'>Manage Coupons</NavLink></li>
                            </> :
                                <>
                                    {/* todo for user */}
                                    <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                    <li><NavLink to='/dashboard/allannouncements'>Announcements</NavLink></li>
                                </>
                        }
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