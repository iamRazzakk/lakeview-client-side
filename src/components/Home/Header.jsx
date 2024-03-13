import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider1 from '../../../public/sidebar1.jpg';
import slider2 from '../../../public/sidebar2.jpg';
import slider3 from '../../../public/sidebar3.jpg';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Header = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    useEffect(() => {
        if (progressCircle.current && progressContent.current) {
            const onAutoplayTimeLeft = (s, time, progress) => {
                progressCircle.current.style.setProperty('--progress', 1 - progress);
                progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
            };
            onAutoplayTimeLeft();
        }
    }, []);

    return (
        <div>
            <div className='md:h-[70vh]'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ height: '100%' }}
                >
                    <SwiperSlide>
                        <img className='h-[80vh] object-cover md:h-[70vh] w-full rounded-t-lg relative' src={slider1} alt="" />
                        <div className="absolute  lg:mt-[100px] rounded-xl items-center h-[80vh] md:h-[40vh]  lg:h-[40vh] md:ml-14 left-0 px-5 py-10 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)] md:mt-[80px]">
                            <h1 className="mt-20 md:mt-0 text-white text-xl md:text-5xl lg:text-7xl font-bold">
                                Cloud Tower-1
                            </h1>
                            <h3 className='md:mt-4 text-white text-3xl '>Luxury Apartments in World</h3>
                            <Link to={'/contact'}>
                                <button className='bg-[#6d778f] mt-4 px-6 py-2 text-white text-base rounded-md'>Contact Us</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[80vh] object-cover md:h-[70vh] w-full rounded-t-lg relative' src={slider2} alt="" />
                        <div className="absolute  lg:mt-[100px] rounded-xl items-center h-[80vh] md:h-[40vh]  lg:h-[40vh] md:ml-14 left-0 px-5 py-10 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)] md:mt-[80px]">
                            <h1 className="mt-20 md:mt-0 text-white text-xl md:text-5xl lg:text-7xl font-bold">
                                Cloud Tower-2
                            </h1>
                            <h3 className='md:mt-4 text-white text-3xl '>Another Luxury Apartments</h3>
                            <Link to={'/contact'}>
                                <button className='bg-[#6d778f] mt-4 px-6 py-2 text-white text-base rounded-md'>Contact Us</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[80vh] object-cover md:h-[70vh] w-full rounded-t-lg relative' src={slider3} alt="" />
                        <div className="absolute  lg:mt-[100px] rounded-xl items-center h-[80vh] md:h-[40vh]  lg:h-[40vh] md:ml-14 left-0 px-5 py-10 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)] md:mt-[80px]">
                            <h1 className="mt-20 md:mt-0 text-white text-xl md:text-5xl lg:text-7xl font-bold">
                                Cloud Tower-3
                            </h1>
                            <h3 className='md:mt-4 text-white text-3xl '>Yet Another Luxury Apartments</h3>
                            <Link to={'/contact'}>
                                <button className='bg-[#6d778f] mt-4 px-6 py-2 text-white text-base rounded-md'>Contact Us</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Marquee className='bg-[#161d2d] rounded-b-lg'>
                <h1 className="text-xl font-bold text-white ">
                    Booking of Apartments is Open on Pre-Launch Discounted Rates!
                </h1>
            </Marquee>
        </div>
    );
};

export default Header;
