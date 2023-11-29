import { Link } from 'react-router-dom';
import forLocation from '../../../public/forlocation.jpg'
const AppartmentLocation = () => {
    return (
        <div className='font-Poppins'>
            <h1 className="text-3xl font-bold font-Poppins md:mt-12 md:mb-12">Apartment’s location:~ </h1>
            <div className="md:flex">
                <div className="flex-1">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-full "
                        src={forLocation}
                        alt="img"
                    />
                </div>
                <div className="flex-1 p-10">
                    <div className="flex flex-col  justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  md:mb-4">Apartment Name:  Lakeview Cottage</h5>
                        <p className="mb-3 font-normal md:mb-5">
                            Area: Sprawling 5-acre land offers exciting potential for diverse developments and ventures.
                        </p>
                        <p className="text-2xl md:mb-5">Location: Plot 14/B, Road 57/59, Gulshan 2 Dhaka, DHA 1212</p>
                    </div>
                    <Link to={ '/locationOnMap'}>
                        <button className="border border-black bg-black text-white px-4 py-2 rounded flex justify-center items-center hover:bg-gray-600 hover:text-white">
                            Show on map
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default AppartmentLocation;