
import { useContext } from 'react';
import './Apartment.css';
import { AuthContext } from '../Authprovider/AuthProvider';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { Swal } from 'sweetalert2';

const AppartmentFullData = ({ apartment }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const status = 'pending';
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    // const { loading } = useContext(AuthContext)
    const { img, apartmentNumber, blockName, floorNumber, rent, _id } = apartment;
    const handleAgrement = () => {
        if (user && user?.email) {
            const agreementData = {
                agreementId: _id,
                userName: user?.displayName,
                userEmail: user?.email,
                img,
                floorNumber,
                blockName,
                apartmentNumber,
                rent,
                date: formattedDate,
                status,
            }
            axiosSecure.post('/agreements', agreementData)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Agreement request successfully",
                            showConfirmButton: false,
                            timer: 2500
                        });
                    }
                })

        }
    }
    return (
        <div className="card-container ">
            <div className="card-content text-black bg-gray-100 rounded-xl p-6">
                <div className="flex items-center mt-2.5 mb-5">
                    <img src={img} alt="Apartment Image" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-black">Rent: ${rent}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="  text-gray-900 dark:text-black">apartment Apartment Number: {apartmentNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="  text-gray-900 dark:text-black">Block Name: {blockName}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="  text-gray-900 dark:text-black">Floor Number: {floorNumber}</span>
                </div>

                <button onClick={() => handleAgrement(apartment)} className="btn btn-outline bg-black text-white">Agreement</button>

            </div>
        </div>
    );
};

export default AppartmentFullData;
