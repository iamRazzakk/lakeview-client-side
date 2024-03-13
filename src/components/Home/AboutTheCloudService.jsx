import image from '../../../public/1st-sec-1.jpg'
const AboutTheCloudService = () => {
    return (
        <div className='md:mt-32'>
            <div className="md:flex">
                <div className="flex-1">
                    <img className='rounded-tr-full' src={image} alt="" />
                </div>
                <div className="flex-1 space-y-3 md:p-16">
                    <h1 className='text-black text-5xl'>About The Cloud Services</h1>
                    <p>The Cloud Services aims to provide long-term value for the Customers and has set new standards with an iconic project of Luxury Apartments in Islamabad. Cloud Tower-1, a modern</p>
                    <p>accommodation fit for royalty. A one-of-a-kind investment project in Real Estate and a unique experience for each of the homeowners. Sleek modern design, cutting-edge amenities, and stunning views of the city, these Residential Flats in Islamabad evoke a sense of well-being and refinement.</p>
                    <p>Currently, luxury apartments for sale in Islamabad at Cloud Tower-1, MPCHS Multi Gardens, B-17 Islamabad.</p>
                    <button className='border border-black bg-black text-white px-4 py-2 rounded flex justify-center items-center hover:bg-gray-600 hover:text-white'>About Us</button>
                </div>
            </div>

        </div>
    );
};

export default AboutTheCloudService;