import { AiOutlineSound } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdHeadsetMic, MdOutlineLaptopChromebook, MdOutlineMapsHomeWork } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


const Card = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-5 mx-2 md:mx-5 lg:mx-10 my-20 px-2">
            {/* first Card */}
            <div className="border border-gray-300 rounded-xl bg-white scale-100 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 transform-gpu will-change-transform">
                <div className="flex items-center gap-2 font-bold justify-center p-6">
                    <AiOutlineSound size={35} className="text-blue-400" />
                    <div >
                        <p className="hover:text-blue-500 text-xl">Merketing & Sale</p>
                        <p className="font-medium  hover:text-blue-500">1526 Jobs Availble</p>
                    </div>
                </div>
            </div>

            {/* second crad */}
            <div className="border border-gray-300 rounded-2xl bg-white hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold justify-center p-6">
                    <MdOutlineMapsHomeWork size={35} className="text-blue-400" />
                    <div>
                        <p className="hover:text-blue-500 text-xl">Finance</p>
                        <p className="text-center font-medium hover:text-blue-500">168 Jobs Availble</p>
                    </div>
                </div>
            </div>

            {/* third cara */}
            <div className="border border-gray-300 rounded-2xl bg-white hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold justify-center p-6">
                    <MdOutlineLaptopChromebook size={35} className="text-blue-400" />
                    <div>
                        <p className="hover:text-blue-500 text-xl">Mangment</p>
                        <p className="text-center font-medium hover:text-blue-500">980 Jobs Availble</p>
                    </div>
                </div>
            </div>

            {/* fourth card */}
            <div className="border border-gray-300 rounded-2xl bg-white hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold justify-center p-6">
                    <FaMagnifyingGlass size={35} className="text-blue-400" />
                    <div>
                        <p className="hover:text-blue-500 text-xl">Human Resource</p>
                        <p className="text-center font-medium hover:text-blue-500">1000 Jobs Availble</p>
                    </div>
                </div>
            </div>

            {/* fifth card */}
            <div className="border border-gray-300 rounded-2xl bg-white hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold justify-center p-6">
                    <MdHeadsetMic size={35} className="text-blue-400" />
                    <div>
                        <p className="hover:text-blue-500 text-xl">Customer Help</p>
                        <p className="text-center font-medium hover:text-blue-500">200 Jobs Availble</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;