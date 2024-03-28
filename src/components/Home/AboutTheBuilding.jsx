import AOS from 'aos';
import 'aos/dist/aos.css';
import locaionImg from '../../../public/1st-sec-1.jpg';
const AboutTheBuilding = () => {
    AOS.init({
        offset: 120,
        duration: 1200,
        easing: 'ease',
        delay: 50,
    });
    return (
        <div className='font-Poppins md:flex gap-4 text-black md:mt-32 mt-10 p-6'>
            <div  data-aos="fade-left" className="flex-1 md:p-12">
                <h1 data-aos="fade-left" className=" text-2xl md:text-5xl md:mb-8">
                    Book A Luxury Apartment in Islamabad
                </h1>
                <h5 data-aos="fade-left" className='text-base font-bold md:mb-3'>
                    Luxury Apartments for Sale in Islamabad
                </h5>
                <div  className='space-y-4'>
                    <li data-aos="fade-left">
                        Cloud Tower-1 is a 27 floor Apartment Building on 12 kanal piece of land located perfectly
                        at Block-G of B-17, Multi-Gardens, comprising of Studio, 1, 2, 3 bed and Penthouse / Duplex Apartments
                    </li>
                    <li data-aos="fade-left">It will spread over an area of 860,000 sq.ft., including over 14,000 sq.ft. area planned for gym and 4 floors reserved for car parking.</li>
                    <li data-aos="fade-left">
                        We will be offering such facilities which are available in very few residential buildings Islamabad.
                    </li>
                </div>
            </div>
            <div className="flex-1">
                <img data-aos="fade-right" className='p-10 rounded-tl-full' src={locaionImg} alt="" />
            </div>
        </div>
    );
};

export default AboutTheBuilding;