
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CountUpCard = ({ startNumber, endNumber, prefix }) => {
    AOS.init({
        offset: 120,
        duration: 1200,
        easing: 'ease',
        delay: 50,
    });
    return (
        <div data-aos="fade-down" className=" md:mt-12 bg-[#161d2d] p-4 rounded-lg shadow-md text-white text-center">
            <div  className="text-4xl font-bold mb-2">
                <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={5}
                    separator=" "
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                />
            </div>
            <div>{prefix}</div>
        </div>
    );
};

const CountUpSection = () => {
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:mt-32 mt-10">
                <CountUpCard startNumber={1} endNumber={20} prefix="KANALS" />
                <CountUpCard startNumber={1} endNumber={27} prefix="FLOORS" />
                <CountUpCard startNumber={3} endNumber={352} prefix="APARTMENTS" />
                <CountUpCard startNumber={4} endNumber={860000} prefix="SQUARE FEET AREA" />
            </section>
        </div>
    );
};

export default CountUpSection;
