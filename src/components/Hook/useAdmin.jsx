import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";

const useAdmin = () => {
const{user}=useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosPublic.get(`/users/admin/${user?.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;