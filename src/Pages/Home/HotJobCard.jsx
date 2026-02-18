import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";


const HotJobCard = ({ job }) => {
    const { title, location, salaryRange, description, company_logo, company, requirements, _id } = job
    return (
        <div className="px-3 md:px-6">
            <div className="card bg-base-100 border border-gray-100 shadow-sm  hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Header section with Logo and Title */}
                <div className="p-5 pb-0 flex items-center gap-4">
                    <div className="p-2 bg-gray-50 rounded-lg">
                        <img
                            src={company_logo}
                            alt={company}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                    <div>
                        <h5 className="font-bold text-lg text-gray-800 leading-tight">{company}</h5>
                        <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                            <CiLocationOn className="text-blue-500" />
                            {location}
                        </p>
                    </div>
                </div>

                <div className="card-body p-5">
                    <h2 className="card-title text-xl font-bold text-slate-800">
                        {title}
                        <div className="badge badge-secondary badge-sm">NEW</div>
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-2">
                        {description}
                    </p>

                    {/* Requirements/Skills as Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {requirements?.map((skill, idx) => (
                            <span
                                key={idx}
                                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-100 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Footer section with Salary and Button */}
                    <div className="flex justify-between items-center mt-6 border-t pt-4">
                        <div className="text-sm">
                            <span className="text-gray-400 block uppercase text-[10px] font-bold">Salary</span>
                            <p className="font-bold text-blue-600">
                                {salaryRange.min}-{salaryRange.max}
                                <span className="text-xs ml-1">{salaryRange.currency?.toUpperCase()}</span>
                            </p>
                        </div>
                        <Link to={`/jobs/${_id}`}>
                            <button className="btn btn-primary btn-sm normal-case hover:scale-105">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;