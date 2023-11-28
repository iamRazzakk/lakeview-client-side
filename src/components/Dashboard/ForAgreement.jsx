import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../Hook/useAxiosSecure';
import { FcAcceptDatabase, FcDeleteDatabase } from "react-icons/fc";


const ForAgreement = () => {
    const axiosSecure = useAxiosSecure()
    const { data: agreements = [] } = useQuery({
        queryKey: ["agreements"],
        queryFn: async () => {
            const res = await axiosSecure.get("/agreements");
            return res.data;
        },
    });
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
                                <td><h2 className="text-2xl"><button><FcAcceptDatabase /></button></h2></td>
                                <td><h1 className="text-2xl"><button><FcDeleteDatabase /></button></h1></td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
        // <div>
        //     {
        //         agreements?.map(agreement => <Agreement key={agreement._id} agreement={agreement}></Agreement>)
        //     }
        // </div>
    );
};

export default ForAgreement;