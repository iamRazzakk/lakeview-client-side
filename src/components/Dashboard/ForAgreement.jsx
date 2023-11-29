import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../Hook/useAxiosSecure';
import { FcAcceptDatabase, FcDeleteDatabase } from "react-icons/fc";
import { Swal } from 'sweetalert2';


const ForAgreement = () => {
    const axiosSecure = useAxiosSecure()
    // 

    const { data: agreements = [], refetch } = useQuery({
        queryKey: ["agreements"],
        queryFn: async () => {
            const res = await axiosSecure.get("/agreements");
            return res.data;
        },
    });
    // 
    const handleAccept = ({ agreementId, userEmail }) => {
        const res = axiosSecure.patch(`/agreement/status/${agreementId}`)
        const response = axiosSecure.patch(`/users/role/${userEmail}`)
        if (res && response) {
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Agreement request accepted",
                showConfirmButton: false,
                timer: 2500
            });
        }
    }
    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Floor No</th>
                        <th>Block No</th>
                        <th>Apartment No</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Accept button</th>
                        <th>Reject button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        agreements?.map((agreement, index) =>
                            <tr key={agreement._id}>
                                <th>{index + 1}</th>
                                <td>{agreement.userName}</td>
                                <td>{agreement.userEmail}</td>
                                <td>{agreement.floorNumber}</td>
                                <td>{agreement.blockName}</td>
                                <td>{agreement.apartmentNumber}</td>
                                <td>{agreement.rent}</td>
                                <td>{agreement.date}</td>
                                <td>
                                    {
                                        agreement?.status == 'pending' ? <>
                                            <button onClick={() => handleAccept({ agreementId: agreement._id, userEmail: agreement.email })}><FcAcceptDatabase className="text-4xl" /></button>
                                        </> : agreement?.status

                                    }
                                </td>
                                <td><button><FcDeleteDatabase className="text-4xl" /></button></td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ForAgreement;