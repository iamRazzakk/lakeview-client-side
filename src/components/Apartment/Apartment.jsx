import  { useState } from 'react';
import AppartmentFullData from './AppartmentFullData';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Apartment = () => {
    const axiosSecure = useAxiosSecure();
    const { data: apartments = [] } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/apartments');
            return res.data;
        },
    });

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const indexOfLastApartment = (currentPage + 1) * itemsPerPage;
    const indexOfFirstApartment = indexOfLastApartment - itemsPerPage;
    const currentApartments = apartments.slice(
        indexOfFirstApartment,
        indexOfLastApartment
    );

    return (
        <div>
            <h1 className='text-3xl font-Poppins font-bold text-center md:mb-12'>
                Total list
            </h1>
            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {currentApartments.map((apartment) => (
                        <AppartmentFullData
                            key={apartment._id}
                            apartment={apartment}
                        />
                    ))}
                </div>
            </div>
            <nav className='flex items-center justify-center pt-20'>
                {[...Array(Math.ceil(apartments.length / itemsPerPage)).keys()].map(
                    (page) => (
                        <button
                            key={page}
                            type='button'
                            className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${currentPage === page
                                ? 'bg-gray-200 text-gray-800'
                                : 'border border-gray-200 text-gray-800 hover:bg-gray-100'
                                } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page + 1}
                        </button>
                    )
                )}
            </nav>
        </div>
    );
};

export default Apartment;