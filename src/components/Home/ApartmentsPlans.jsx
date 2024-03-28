import {  useState } from "react";
import OneBadImg from '../../../public/One-bed-apartment-1-new.png'
import TwoBadImg from '../../../public/twoBad.png'
import ThreeBadImg from '../../../public/threeBad.png'

const ApartmentsPlans = () => {
    const [activeTab, setActiveTab] = useState('One');

    const handleClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className="md:mt-32">
            <div className="md:flex p-6 justify-center items-center">
                <div role="tablist" className="tabs tabs-bordered">
                    <a onClick={() => handleClick("One")} role="tab" className={` text-black tab ${activeTab === 'One' ? 'active text-black font-bold' : ''}`}>ONE BED APARTMENT</a>
                    <a onClick={() => handleClick("Two")} role="tab" className={`text-black tab ${activeTab === 'Two' ? 'active text-black font-bold' : ''}`}> TWO BED APARTMENT</a>
                    <a onClick={() => handleClick("Three")} role="tab" className={`text-black tab ${activeTab === 'Three' ? 'active text-black font-bold' : ''}`} >THREE BED APARTMENT</a>
                </div>
            </div>
            <div className="md:mt-10">
                {/* for One Bad */}
                {activeTab === "One" && (
                    <div className="md:flex p-6 bg-gray-200 gap-4 text-black">
                        <div className="flex-1 md:p-16">
                            <h1 className="text-xl md:mb-4">Designs own a long-term permanent residence having spacious rooms with all the required facilities.</h1>
                            <div className="space-y-4">
                                <li>Spacious TV Lounge</li>
                                <li>Min room size; 12’x14’ excluding wardrobe</li>
                                <li>All apartments have wide terraces</li>
                                <li>Beautifully designed washrooms</li>
                                <li>One bed apartments having min size of 932 sq.ft. up to 1150 sq.ft</li>
                                <li>Kitchens which can be made open or closed on demand</li>
                                <li>Service balconies for placement of geyser and kitchen ventilation</li>
                                <li>Huge Windows</li>
                            </div>

                        </div>
                        <div className="flex-1">
                            <img className="md:p-10 h-full w-full object-cover" src={OneBadImg} alt="" />
                        </div>
                    </div>
                )}
                {/* For Two Bad */}
                {
                    activeTab === "Two" && (<div className="md:flex p-6 bg-gray-200 gap-4 text-black">
                        <div className="flex-1 md:p-16">
                            <h1 className="text-xl md:mb-4">Designs own a long-term permanent residence having spacious rooms with all the required facilities.</h1>
                            <div className="space-y-4">
                                <li>Spacious TV Lounge</li>
                                <li>Min room size; 12’x14’ excluding wardrobe</li>
                                <li>All apartments have wide terraces</li>
                                <li>Every room with huge windows</li>
                                <li>Two bed apartments having min size of 1689 sq.ft. up to 2130 sq.ft</li>
                                <li>Kitchens which can be made open or closed on demand</li>
                                <li>Service balconies for placement of geyser and kitchen ventilation</li>
                                <li>Storeroom with every family apartment</li>
                                <li>300 sq.ft. for one car parking included</li>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img className="md:p-10 h-full w-full object-cover" src={TwoBadImg} alt="" />
                        </div>
                    </div>)
                }
                {/* Three Bad */}
                {
                    activeTab === "Three" && (<div className="md:flex p-6 bg-gray-200 gap-4 text-black">
                        <div className="flex-1 md:p-16">
                            <h1 className="text-xl md:mb-4">Designs own a long-term permanent residence having spacious rooms with all the required facilities.</h1>
                            <div className="space-y-4">
                                <li>Spacious TV Lounge</li>
                                <li>Min room size; 12’x14’ excluding wardrobe</li>
                                <li>All apartments have wide terraces</li>
                                <li>Every room with huge windows</li>
                                <li>Two bed apartments having min size of 1689 sq.ft. up to 2130 sq.ft</li>
                                <li>Kitchens which can be made open or closed on demand</li>
                                <li>Service balconies for placement of geyser and kitchen ventilation</li>
                                <li>Storeroom with every family apartment</li>
                                <li>300 sq.ft. for one car parking included</li>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img className="md:p-10 h-full w-full object-cover" src={ThreeBadImg} alt="" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ApartmentsPlans;