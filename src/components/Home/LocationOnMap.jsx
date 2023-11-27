import { Link } from 'react-router-dom';
import img from '../../../public/gulshan.png'

const LocationOnMap = () => {
    return (
        <div className='md:mt-10'>
            <img className='h-[80vh] w-full rounded' src={img} alt="mapImg" />
            <div className='flex justify-center items-center'>
                <Link to={'/'}>
                    <button className='btn btn-outline bg-black text-white font-Poppins px-8'>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default LocationOnMap;