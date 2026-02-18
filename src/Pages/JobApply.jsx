import { useNavigate, useParams } from "react-router";
import useAuth from "../context/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {

    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmitApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkdin, github, resume);

        const application = {
            job_id: id,
            applicant_email: user.email,
            linkdin,
            github,
            resume
        }

        fetch('http://localhost:5000/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(application)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Apply Succesful",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/job-application')
                }
                else {
                    Swal.fire({
                        title: "application failed",
                        icon: "error",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmitApply}>
                <div className="hero bg-base-200 min-h-[65vh]">
                    <div className="hero-content max-w-2xl w-full">
                        <div className="card bg-base-100 w-full shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Linkdin URL</label>
                                    <input type="url" className="input input-lg  w-full" name="linkdin" placeholder="Linkdin URL" />
                                    <label className="label">Github URL</label>
                                    <input type="url" className="input input-lg w-full" name="github" placeholder="Github URL" />
                                    <label className="label">Resume URL</label>
                                    <input type="url" className="input input-lg w-full" name="resume" placeholder="Resume URL" />
                                    <button className="btn btn-neutral mt-4">Apply Now</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobApply;