import { AiOutlineSound } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdHeadsetMic, MdOutlineLaptopChromebook, MdOutlineMapsHomeWork } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";


const Card = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 mx-auto px-2 md:px-4 my-10 max-w-[1650px]">
            
            {/* first Card */}
            <div className="group flex items-center gap-3 p-4 border border-gray-100 rounded-xl bg-white hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer justify-center">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <AiOutlineSound size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-700 text-sm group-hover:text-blue-600 transition-colors">Marketing</p>
                    <p className="text-[11px] font-medium text-gray-400">1,526 Jobs</p>
                </div>
            </div>

            {/* second Card */}
            <div className="group flex items-center gap-3 p-4 border border-gray-100 rounded-xl bg-white hover:shadow-md hover:border-emerald-300 transition-all duration-300 cursor-pointer justify-center">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <MdOutlineMapsHomeWork size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-700 text-sm group-hover:text-emerald-600 transition-colors">Finance</p>
                    <p className="text-[11px] font-medium text-gray-400">168 Jobs</p>
                </div>
            </div>

            {/* third Card */}
            <div className="group flex items-center gap-3 p-4 border border-gray-100 rounded-xl bg-white hover:shadow-md hover:border-purple-300 transition-all duration-300 cursor-pointer justify-center">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <MdOutlineLaptopChromebook size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-700 text-sm group-hover:text-purple-600 transition-colors">Management</p>
                    <p className="text-[11px] font-medium text-gray-400">980 Jobs</p>
                </div>
            </div>

            {/* fourth Card */}
            <div className="group flex items-center gap-3 p-4 border border-gray-100 rounded-xl bg-white hover:shadow-md hover:border-orange-300 transition-all duration-300 cursor-pointer justify-center">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <FaMagnifyingGlass size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-700 text-sm group-hover:text-orange-600 transition-colors">HR</p>
                    <p className="text-[11px] font-medium text-gray-400">1,000 Jobs</p>
                </div>
            </div>

            {/* fifth Card */}
            <div className="group flex items-center gap-3 p-4 border border-gray-100 rounded-xl bg-white hover:shadow-md hover:border-cyan-300 transition-all duration-300 cursor-pointer justify-center">
                <div className="p-2 bg-cyan-50 rounded-lg text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <MdHeadsetMic size={24} />
                </div>
                <div>
                    <p className="font-bold text-gray-700 text-sm group-hover:text-cyan-600 transition-colors">Support</p>
                    <p className="text-[11px] font-medium text-gray-400">200 Jobs</p>
                </div>
            </div>

        </div>
    );
};

export default Card;