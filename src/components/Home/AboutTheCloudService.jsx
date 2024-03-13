import image from '../../../public/1st-sec-1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const AboutTheCloudService = () => {
    AOS.init({
        offset: 120,
        duration: 1200,
        easing: 'ease',
        delay: 50,
    });
    return (
        <div className='md:mt-32 mt-10 p-6'>
            <div className="md:flex">
                <div className="flex-1">
                    <img data-aos="fade-left" className='rounded-tr-full' src={image} alt="" />
                </div>
                <div data-aos="fade-right" className="flex-1 space-y-3 md:p-16">
                    <h1 data-aos="fade-right" className='text-black text-2xl md:text-5xl'>About The Cloud Services</h1>
                    <p className='text-black' data-aos="fade-right">The Cloud Services aims to provide long-term value for the Customers and has set new standards with an iconic project of Luxury Apartments in Islamabad. Cloud Tower-1, a modern</p>
                    <p className='text-black' data-aos="fade-right">accommodation fit for royalty. A one-of-a-kind investment project in Real Estate and a unique experience for each of the homeowners. Sleek modern design, cutting-edge amenities, and stunning views of the city, these Residential Flats in Islamabad evoke a sense of well-being and refinement.</p>
                    <p className='text-black' data-aos="fade-right">Currently, luxury apartments for sale in Islamabad at Cloud Tower-1, MPCHS Multi Gardens, B-17 Islamabad.</p>
                    <Link to='contact'>
                        <button className='border border-black bg-black text-white px-4 py-2 rounded flex justify-center items-center hover:bg-gray-600 hover:text-white'>About Us</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AboutTheCloudService;