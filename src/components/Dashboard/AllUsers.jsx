// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../Hook/useAxiosSecure";


// const AllUsers = () => {
//     const axiosSecure = useAxiosSecure()
//     const { data: users = [] } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('users');
//             return res.data
//         }
//     })
//     return (
//         <div>
//             <h1 className="text-2xl text-center font-bold">
//                 All users:{users.length}
//             </h1>

//         </div>
//     );
// };

// export default AllUsers;