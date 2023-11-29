import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMember = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: isMember, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'isMember'],
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosPublic.get(`/users/member/${user?.email}`);
            return res.data?.admin;
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;