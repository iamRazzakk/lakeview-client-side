import { IoPeopleSharp } from "react-icons/io5";
import { IoMdRestaurant } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { GiSecurityGate } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { FaDatabase } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import '../Home/Cupon.css'
const Project = () => {
    return (
        <div className="md:mt-32">
            <div className="text-center text-5xl text-black">
                Project Facilities
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/*  Community Living */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><IoPeopleSharp className="text-4xl text-black"></IoPeopleSharp></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Community Living</h2>
                        <p className="text-center text-black text-base">Our services cater residents of all ages. We have planned day care center, indoor and outdoor play areas for children with walking tracks, senior citizens’ lounge for older people to socialize etc.</p>
                    </div>
                </div>
                {/* Roof Top Restaurant */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><IoMdRestaurant className="text-4xl text-black"></IoMdRestaurant></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Roof Top Restaurant</h2>
                        <p className="text-center text-black text-base">The availability of a roof top restaurant with the combination of food, skywalk & observatory in Cloud Tower-1 is very convenient and entertaining for the residents.</p>
                    </div>
                </div>
                {/*  Gym */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><CgGym className="text-4xl text-black"></CgGym></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Gym</h2>
                        <p className="text-center text-black text-base">Cloud Tower-1 in Multi Gardens B-17 will have the most up-to-date separate gyms for ladies and gents with latest equipment. As the saying goes “Healthy minds healthy bodies”.</p>
                    </div>
                </div>
                {/*  Security */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><GiSecurityGate className='text-4xl text-black'></GiSecurityGate></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Security</h2>
                        <p className="text-center text-black text-base">A highly secured system for the safety of residents is implemented in Cloud Tower-1 residential apartments. Top features include Multiple Emergency Exits, 24/7 CCTV Surveillance.</p>
                    </div>
                </div>
                {/*  Energy Efficiency */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><SlEnergy className='text-4xl text-black'></SlEnergy></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Energy Efficiency</h2>
                        <p className="text-center text-black text-base">Cloud Tower-1 provides energy-efficient flats in Islamabad. Complete planning is done to achieve Green Building Solution. The key feature is Passive Energy Utilization.</p>
                    </div>
                </div>
                {/*  Data Connectivity */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><FaDatabase className='text-4xl text-black'></FaDatabase ></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Data Connectivity</h2>
                        <p className="text-center text-black text-base">For the first time in Pakistan, a residential building has introduced an in-building solution for better mobile coverage. Fiber connectivity to every apartment is created with this in mind.</p>
                    </div>
                </div>
                {/*  Community Living */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><FaHouse className='text-4xl text-black'></FaHouse></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Smart Building</h2>
                        <p className="text-center text-black text-base">All the structures are smartly built  (smart lights and smart fans in common areas, smart entrances, solar powered lights, smart apartment solutions on demand of customers)</p>
                    </div>
                </div>
                {/*  Pharmacy */}
                <div className="card card-compact shadow-xl p-6 coupon-card">
                    <figure><MdLocalPharmacy className='text-4xl text-black'></MdLocalPharmacy></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-black">Pharmacy</h2>
                        <p className="text-center text-black text-base">Cloud Tower-1 in Multi Gardens B-17 provides an advanced pharmacy to facilitate their residents so they will not suffer outside in search of medicines with 24×7 medical emergency services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;