import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";


const HotJobCard = ({ job }) => {
    const { title, location, salaryRange, description, company_logo, company,requirements, _id} = job
    return (
        <div className="my-16">
            <div className="card bg-base-100 shadow-sm mx-3.5">
                <div className="flex items-center gap-2">
                    <figure>
                        <img
                            src={company_logo} 
                            className="w-16"
                            />
                            
                    </figure>
                    <div>
                        <h5 className="font-bold">{company}</h5>
                        <p className="flex items-center gap-1.5 font-medium">
                            <CiLocationOn size={20} className="text-black"/>
                            {location}
                        </p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            requirements.map((skill, idx) => <p className="border rounded-xl p-2 text-center" key={idx}>{skill}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end items-center mt-3">
                        <p className="font-medium">Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;