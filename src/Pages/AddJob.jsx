import { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";

const AddJob = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    // Hanle Form Data
    const handleData = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const intializeData = Object.fromEntries(formData.entries());
        console.log(intializeData)
        const { min, max, currency, ...newJob } = intializeData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split(',').map(item => item.trim());
        console.log(newJob)
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Job Added SuccesFully",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div className='flex flex-col justify-center mx-auto w-full min-h-[80vh] px-2'>
            <div className=" ">
                <div className="w-full">
                    <div className="card bg-base-100 w-full max-w-5xl mx-auto shadow-2xl">
                        <form onSubmit={handleData} className="card-body">
                            <fieldset className="fieldset">

                                {/* company information */}
                                <div className="flex md:flex-row items-center gap-4 ">
                                    {/* CompanyLogo */}
                                    <div className="flex-1 w-full">
                                        <label className="label">Company Logo</label>
                                        <input className="input w-full" type="url" name="company_logo" placeholder="Company_Logo" required/>
                                    </div>
                                    {/* Company Name */}
                                    <div className="flex-1 w-full">
                                        <label className="label">CompanyName</label>
                                        <input className="input w-full" type="text" name="company" placeholder="companyName" required/>
                                    </div>
                                </div>


                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                                    {/* Job Title */}
                                    <div>
                                        <label className="label">Job Title</label>
                                        <input type="text" className="input w-full" name='title' placeholder="Job Title" required />
                                    </div>
                                    {/* job location */}
                                    <div>
                                        <label className="label">Job Location</label>
                                        <input type="text" className="input w-full" name='location' placeholder="Job Location" required />
                                    </div>

                                </div>

                                <div className='flex flex-col md:flex-row gap-4 items-end'>
                                    {/* job requirements */}
                                    <div className='flex-1 w-full'>
                                        <label className="label pb-2">Requirements</label>
                                        <input type="text" className="input w-full" name='requirements' placeholder="Requirements" required />
                                    </div>

                                    {/* job type */}
                                    <div className="flex-1 w-full" >
                                        <label className="label">Job Type</label>
                                        <select name="jobType" className="select w-full" required>
                                            <option value="" disabled={true}>Pick a job type</option>
                                            <option>Hybrid</option>
                                            <option>Full-Time</option>
                                            <option>Half-Time</option>
                                        </select>
                                    </div>
                                </div>

                                {/* jobCategory */}
                                <div className='flex flex-col md:flex-row gap-4 items-end'>
                                    <div className="flex-1 w-full">
                                        <label className="label">Job Field</label>
                                        <select defaultValue="selected" name="category" className="select w-full" required>
                                            <option value="" disabled={true}>Pick a job Field</option>
                                            <option>Developer</option>
                                            <option>Finance</option>
                                            <option>Merketing</option>
                                        </select>
                                    </div>

                                    {/* Deadline */}
                                    <div className='flex-1 w-full'>
                                        <label className="label">
                                            <span className="label">Deadline</span>
                                        </label>
                                        <input type="date" name="date" className='input w-full' required />
                                    </div>
                                </div>

                                {/* Hr Information */}
                                {/* Hr deadline */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input className="input w-full" type="email" name="hr_email" placeholder="hr_email" defaultValue={user.email} required />
                                    <input className="input w-full" type="text" name="hr_name" placeholder="hr_name" required />
                                </div>

                                {/* Salary Information */}
                                <div>
                                    <label className="label">Salary</label>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

                                        <input className='input w-full' type="text" name="min" id="" placeholder='Min' required />
                                        <input className='input w-full' type="text" name="max" id="" placeholder='Max' required />
                                        <div className="w-full">
                                            <select defaultValue="Pick a Currency" name="currency" className="select w-full" required>
                                                <option disabled={true}>Pick a Currency</option>
                                                <option>Bdt</option>
                                                <option>Usd</option>
                                                <option>Urn</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className='w-full'>
                                    <label className='label m-1'>Job Description</label>
                                    <textarea name="description" className="textarea textarea-border w-full input-border min-h-0" rows={2} placeholder="Bio" required></textarea>
                                </div>

                                <button className="btn btn-neutral mt-4">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;