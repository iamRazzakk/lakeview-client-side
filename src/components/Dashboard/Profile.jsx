import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users');
            return res.data;
        }
    });

    const memberUsers = users.filter(member => member.role === "member");
    const Users = users.filter(user => user.role === "user");
    const isAdmin = user?.role === "admin";

    return (
        <div className="max-w-full">
            <h1 className="text-center  text-bold md:text-2xl font-Poppins uppercase font-bold">my profile</h1>
            <div className="md:flex md:mt-6">
                <div className="flex-1">
                    <img className="w-60 h-60 rounded-full mx-auto p-6" src={user?.photoURL || users?.photo} alt="user img" />
                </div>
                <div className="flex-1  max-w-full mx-auto p-6 text-center">
                    <h1 className="md:text-2xl font-bold uppercase ">
                        {user?.displayName}
                    </h1>
                    <p className="text-green-500 w-12 mx-auto md:text-xl flex justify-center item-center whitespace-normal">{user?.email}</p>
                    {isAdmin && (
                        <>
                            <p className="text-xl">Total Member: {memberUsers?.length}</p>
                            <p className="text-xl">Total User: {Users?.length}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
