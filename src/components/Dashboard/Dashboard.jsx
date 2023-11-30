import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAdmin from "../Hook/useAdmin";
// import useMember from "../Hook/useMember";
import useUsers from "../Hook/useUser";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    // const [isMember] = useMember()
    const [users] = useUsers()
    const isUser = users?.filter(usr => usr.role == "user" && usr.email == user.email)
    const members = users.filter(usr => usr.role == "member" && usr.email == user.email);
    return (
        <div>
            <Helmet>
                <title>Small Lakeview Cottage||Dashboard</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="text-black font-Poppins flex md:mt-10 max-w-3xl lg:max-w-screen-xl">
                <div className="w-40 md:w-64 max-h-full bg-gray-200">
                    <ul className="menu md:p-6  md:text-xl">
                        {/* <li><NavLink to='/'>Home</NavLink></li> */}
                        {
                            isAdmin ? <>
                                <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/member'>Manage Members</NavLink></li>
                                <li><NavLink to='/dashboard/Announcements'>Announcements</NavLink></li>
                                <li><NavLink to='/dashboard/agreement'>Agreement Requests</NavLink></li>
                                <li><NavLink to='/dashboard/coupons'>Manage Coupons</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/dashboard/allannouncements'>All Announcement</NavLink></li>
                            </> : <></>
                        }
                        {
                            isUser?.length > 0 ? <>
                                <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/allannouncements'>Announcements</NavLink></li>
                            </> : <></>
                        }
                        {
                            members?.length > 0 ? <>
                                < li > <NavLink to='/dashboard/memberProfile'>My Profile</NavLink></li>
                                < li > <NavLink to='/dashboard/makepayment'>Make payment</NavLink></li>
                                < li > <NavLink to='/dashboard/payment'>Payment History</NavLink></li>
                                < li > <NavLink to='/dashboard/allannouncements'>Announcements</NavLink></li>
                            </> : <>

                            </>
                        }


                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>

        </div >
    );
};

export default Dashboard;

