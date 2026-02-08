import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiCalendar, CiDollar, CiLocationOn, CiMail, CiUser } from "react-icons/ci";
import { MdCategory, MdOutlineWorkOutline } from "react-icons/md";
import { useLoaderData } from "react-router";

const JobDetails = () => {

    const { title, location, jobType, category, applicationDeadline,
        salaryRange, description, company, requirements,
        responsibilities, hr_name, company_logo } = useLoaderData();

    return (
        <div className="flex justify-center my-14 mx-3">
            <div className="max-w-4xl w-full bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">

                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <img src={company_logo} alt={company} className="w-16 h-16 object-contain" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-extrabold text-gray-800">{title}</h1>
                                <p className="text-blue-600 font-semibold text-lg">{company}</p>
                                <div className="flex flex-wrap gap-4 mt-2 text-gray-500 text-sm">
                                    <span className="flex items-center gap-1"><CiLocationOn className="text-blue-500" /> {location}</span>
                                    <span className="flex items-center gap-1"><MdOutlineWorkOutline className="text-blue-500" /> {jobType}</span>
                                    <span className="flex items-center gap-1"><MdCategory className="text-blue-500" /> {category}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-2 rounded-xl border border-blue-100 shadow-sm">
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Deadline</p>
                            <p className="text-red-500 font-bold flex items-center gap-1">
                                <CiCalendar /> {applicationDeadline}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Left Side: Details */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Description */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">Job Description</h3>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>

                        {/* Requirements */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Key Requirements</h3>
                            <div className="flex flex-wrap gap-2">
                                {requirements.map((req, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">
                                        {req}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">Responsibilities</h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {responsibilities.map((res, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                        <AiOutlineSafetyCertificate className="mt-1 text-green-500 shrink-0" />
                                        <span>{res}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Quick Info & Apply */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Salary Range</h4>
                            <div className="flex items-center gap-3 text-2xl font-bold text-green-600">
                                <CiDollar />
                                <span>{salaryRange.min} - {salaryRange.max} <span className="text-sm uppercase">{salaryRange.currency}</span></span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Contact HR</h4>
                            <div className="space-y-3 text-sm">
                                <p className="flex items-center gap-2 font-medium text-gray-700"><CiUser className="text-blue-500" size={18} /> {hr_name}</p>
                                <p className="flex items-center gap-2 text-gray-500 italic"><CiMail className="text-blue-500" size={18} /> hr@techsolutions.com</p>
                            </div>
                        </div>

                        {/* Apply Button */}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;