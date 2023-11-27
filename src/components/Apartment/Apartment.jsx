import { useEffect, useState } from 'react';
import AppartmentFullData from './AppartmentFullData';

const Apartment = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appartment')
            .then(res => res.json())
            .then(data => setData(data))
    }, []); 

    console.log(data);

    return (
        <div>
            <h1 className='text-3xl font-Poppins font-bold text-center md:mb-12'>Total list</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    data.map(apartment => (
                        <AppartmentFullData key={apartment._id} appertment={apartment} />
                    ))
                }
            </div>
        </div>
    );
};

export default Apartment;
