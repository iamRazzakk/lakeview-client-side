import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="max-w-full">
            <h1 className="text-center  text-bold md:text-2xl font-Poppins uppercase font-bold">my profile</h1>
            <div className="md:flex md:mt-6">
                <div className="flex-1">
                    <img className="w-full mx-auto p-6 rounded-xl" src={user?.photoURL} alt="user img" />
                </div>
                <div className="flex-1  w-full mx-auto p-6 text-center">
                    <h1 className="md:text-2xl font-bold uppercase ">
                        {user?.displayName}
                    </h1>
                    <p className="text-green-500 flex justify-center item-center">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;