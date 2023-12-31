import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { FaUserGroup } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { Swal } from 'sweetalert2';


const ForMember = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users, refetch = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users');
            return res.data
        }
    })
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is admin naw`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    // const handleDeleteUser = (user) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     })
    //         .then((result) => {
    //             if (result.isConfirmed) {
    //                 const res = axiosSecure.delete(`/users/${user._id}`)
    //                 console.log(res);
    //                 if (res.data.deletedCount > 0) {
    //                     refetch();
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your file has been deleted.",
    //                         icon: "success"
    //                     });
    //                 }
    //             }
    //         });
    // }
    const handleMakeMember = (user) => {
        axiosSecure.patch(`/users/member/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is admin naw`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h1 className="text-2xl">user{users?.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table max-w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role === 'admin' ? "Admin" :
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-ghost btn-lg">
                                                <MdAdminPanelSettings className="text-red-600 text-xl"></MdAdminPanelSettings>
                                            </button>
                                    }
                                </td>
                                <td>
                                    {
                                        user?.role === 'member' ? "Member" :
                                            <button
                                                onClick={() => handleMakeMember(user)}
                                                className="btn btn-ghost btn-lg">
                                                <FaUserGroup className="text-red-600"></FaUserGroup >
                                            </button>
                                    }
                                </td>

                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ForMember;