
import AppartmentFullData from './AppartmentFullData';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hook/useAxiosSecure';

const Apartment = () => {
    const axiosSecure = useAxiosSecure();
    const { data: apartments = [] } = useQuery({
        queryKey: ["apartments"],
        queryFn: async () => {
            const res = await axiosSecure.get("/apartments");
            return res.data;
        },
    });



    return (
        <div>
            <h1 className='text-3xl font-Poppins font-bold text-center md:mb-12'>Total list</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    apartments?.map(apartment => (
                        <AppartmentFullData key={apartment._id} apartment={apartment} />
                    ))
                }
            </div>
        </div>
    );
};

export default Apartment;
