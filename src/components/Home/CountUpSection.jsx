
import CountUp from 'react-countup';

const CountUpCard = ({ startNumber, endNumber, prefix }) => {
    return (
        <div className=" md:mt-32 bg-[#161d2d] p-4 rounded-lg shadow-md text-white text-center">
            <div className="text-4xl font-bold mb-2">
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
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <CountUpCard startNumber={1} endNumber={20} prefix="KANALS" />
                <CountUpCard startNumber={1} endNumber={27} prefix="FLOORS" />
                <CountUpCard startNumber={3} endNumber={352} prefix="APARTMENTS" />
                <CountUpCard startNumber={4} endNumber={860000} prefix="SQUARE FEET AREA" />
            </section>
        </div>
    );
};

export default CountUpSection;
