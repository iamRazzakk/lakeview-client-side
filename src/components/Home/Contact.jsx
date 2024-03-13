import aboutUS from '../../../public/sidebar1.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import '../../components/Home/Cupon.css'
const Contact = () => {
    return (
        <div className=" ">
            <div className=''>
                <img className=' md:h-[60vh] w-full object-cover' src={aboutUS} alt="" />
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:mt-10 mt-4'>
                <div className='text-black coupon-card border p-6 space-y-4 rounded-md'>
                    <h1 className='md:text-5xl text-black flex items-center justify-center '>
                        <FaLocationDot ></FaLocationDot>
                    </h1>
                    <h1 className="text-black text-center text-2xl">
                        Address
                    </h1>
                    <h1 className="text-black text-center">
                        The Cloud Services, Head Office, Building, Plaza No.3, Markaz Block B-1 Ext, Multi-Gardens, B-17, Islamabad
                    </h1>
                </div>
                <div className='text-black coupon-card border p-6 space-y-4 rounded-md'>
                    <h1 className='text-black md:text-5xl flex items-center justify-center '>
                        <MdEmail ></MdEmail>
                    </h1>
                    <h1 className="text-center text-black text-2xl">
                       E-mail
                    </h1>
                    <h1 className="text-center text-black">
                        mdabdurrazzakrakib290@gmail.com
                    </h1>
                </div>
                <div className='text-black coupon-card border p-6 space-y-4 rounded-md'>
                    <h1 className='text-black md:text-5xl flex items-center justify-center '>
                        <FaPhoneAlt ></FaPhoneAlt>
                    </h1>
                    <h1 className="text-black text-center text-2xl">
                        Phone
                    </h1>
                    <h1 className="text-center text-black">
                        Call/Whatsapp +8801878265664
                    </h1>
                </div>
                <div className='text-black coupon-card border p-6 space-y-4 rounded-md'>
                    <h1 className='md:text-5xl text-black flex items-center justify-center '>
                        <MdOutlineWatchLater ></MdOutlineWatchLater>
                    </h1>
                    <h1 className="text-center text-black text-2xl">
                        Hours
                    </h1>
                    <h1 className="text-center text-black">
                        Any Time
                    </h1>
                </div>
            </div>
        </div>
    );
};
export default Contact;