
import { Link } from 'react-router-dom';
import errorImg from '../../../public/3047124.jpg';
const Error = () => {
    return (
        <div className=''>
            <img className='h-[90vh] w-full object-cover' src={errorImg} alt="Error" />
            <div className='flex justify-center items-center'>
                <Link to={'/'}>
                    <button className='btn btn-outline bg-black text-white'>HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;