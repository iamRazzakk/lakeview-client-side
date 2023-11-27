import { useContext } from "react";
import { AuthContext } from './../Authprovider/AuthProvider';



const AppartmentFullData = ({ appertment }) => {
    // const { loading } = useContext(AuthContext)
    const { img, agreementButton, apartmentNumber, blockName, floorNumber, rent } = appertment;
    return (
        < div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
            <div className="px-5 pb-5">
                <div className="flex items-center mt-2.5 mb-5">
                    <img src={img} alt="Apartment Image" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Rent: ${rent}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl  text-gray-900 dark:text-white">apartment Apartment Number: {apartmentNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl  text-gray-900 dark:text-white">Block Name: {blockName}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl  text-gray-900 dark:text-white">Floor Number: {floorNumber}</span>
                </div>
                <button className="btn btn-outline bg-black text-white">{agreementButton}</button>
            </div>
        </div >

    );
};

export default AppartmentFullData;