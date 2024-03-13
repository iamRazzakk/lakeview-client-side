
import locaionImg from '../../../public/1st-sec-1.jpg';
const AboutTheBuilding = () => {
    return (
        <div className='font-Poppins md:flex gap-4 text-black md:mt-32'>
            <div className="flex-1 md:p-10">
                <h1 className="text-5xl md:mb-3">
                    Book A Luxury Apartment in Islamabad
                </h1>
                <h5 className='text-base font-bold md:mb-3'>
                    Luxury Apartments for Sale in Islamabad
                </h5>
                <div className='space-y-4'>
                    <li>
                        Cloud Tower-1 is a 27 floor Apartment Building on 12 kanal piece of land located perfectly
                        at Block-G of B-17, Multi-Gardens, comprising of Studio, 1, 2, 3 bed and Penthouse / Duplex Apartments
                    </li>
                    <li>It will spread over an area of 860,000 sq.ft., including over 14,000 sq.ft. area planned for gym and 4 floors reserved for car parking.</li>
                    <li>
                        We will be offering such facilities which are available in very few residential buildings Islamabad.
                    </li>
                </div>
            </div>
            <div className="flex-1">
                <img className='rounded-br-full' src={locaionImg} alt="" />
            </div>
        </div>
    );
};

export default AboutTheBuilding;