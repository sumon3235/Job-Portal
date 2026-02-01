import { AiOutlineSound } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";


const Card = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-5 max-w-[1500px] mx-auto my-20">
            {/* first Card */}
            <div className="border border-gray-600 rounded-2xl bg-gray-100 scale-100 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
                <div className="flex items-center gap-2 font-bold text-2xl p-2 text-center justify-center">
                    <AiOutlineSound size={20} className="text-blue-400"/>
                    <p className="text-center">Merketing & Sale</p>
                </div>
                <p className="text-center font-medium">1526 Jobs Availble</p>
            </div>

            {/* second crad */}
            <div className="border border-gray-600 rounded-2xl bg-gray-100 hover:scale-105 transition-all duration-200">
                <div className="flex items-center gap-2 font-bold text-2xl p-2 justify-center">
                    <AiOutlineSound size={20} className="text-blue-400"/>
                    <p className="text-center">Merketing & Sale</p>
                </div>
                <p className="text-center font-medium">1526 Jobs Availble</p>
            </div>

            {/* third cara */}
            <div className="border border-gray-600 rounded-2xl bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
                <div className="flex items-center gap-2 font-bold text-2xl p-2 justify-center">
                    <AiOutlineSound size={20} className="text-blue-400"/>
                    <p className="text-center">Merketing & Sale</p>
                </div>
                <p className="text-center font-medium">1526 Jobs Availble</p>
            </div>

            {/* fourth card */}
            <div className="border border-gray-600 rounded-2xl bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
                <div className="flex items-center gap-2 font-bold text-2xl p-2 justify-center">
                    <AiOutlineSound size={20} className="text-blue-400"/>
                    <p className="text-center">Merketing & Sale</p>
                </div>
                <p className="text-center font-medium">1526 Jobs Availble</p>
            </div> 

            {/* fifth card */}
            <div className="border border-gray-600 rounded-2xl p-2 bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
                <div className="flex items-center gap-2 font-bold text-2xl p-2 justify-center">
                    <AiOutlineSound size={20} className="text-blue-400"/>
                    <p className="text-center">Merketing & Sale</p>
                </div>
                <p className="text-center font-medium">1526 Jobs Availble</p>
            </div>

        </div>
    );
};

export default Card;