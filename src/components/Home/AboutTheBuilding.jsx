
import locaionImg from '../../../public/location.jpeg';
const AboutTheBuilding = () => {
    return (
        <div className='font-Poppins'>
            <section className="about-building p-8 bg-white">
                <h2 className="text-3xl font-bold mb-4">About the Building:~</h2>
            </section>
            <div>
                <div>
                    <img className='rounded-lg w-full object-cover bg-right-top brightness-50 relative  ' src={locaionImg} alt="" />
                </div>
                <div className='absolute md:font-bold brightness-50  md:w-2/3 mx-auto h-[200px]  md:h-96 text-white md:text-black bg-opacity-25 -mt-48 md:-mt-96  text-center'>
                    <h1 className="font-bold md:text-5xl md:mt-4">Building Description</h1>
                    <h1 className="md:text-3xl md:mt-4">Apartment Name: <small>Lakeview Cottage</small></h1>
                    <p className='md:text-2xl md:mt-4'>Area: <small>Sprawling 5-acre land offers exciting potential for diverse developments and ventures.</small></p>
                    <p className="md:text-xl md:mt-4">facility: <small>Sophisticated amenities, panoramic views, and modern comforts for elegant living</small></p>
                    <p className="md:text-xl md:mt-4">Location: <small>Plot 14/B, Road 57/59, Gulshan 2 Dhaka, DHA 1212</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutTheBuilding;