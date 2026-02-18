import { useEffect, useState } from "react";
import useAuth from "../context/useAuth";
import Swal from "sweetalert2";
import notFound from "../assets/Lottie-animation/not-found.json"
import Lottie from "lottie-react";
import { Link } from "react-router";

const MyApplication = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            fetch(`http://localhost:5000/job-application/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    data.deletedCount > 0

                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            const remaining = jobs.filter(job => job._id !== id);
            setJobs(remaining);
        });
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-[65vh] px-1 md:px-5 lg:px-0">
            {
                jobs.length > 0 ? (
                    <div className="overflow-x-auto max-w-5xl w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th className="hidden md:table-cell">Job Type</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jobs.map(job =>
                                        <tr key={job._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={job.company_logo} />
                                                        </div>
                                                    </div>
                                                    <div className="flex-col justify-center">
                                                        <div className="font-bold">{job.title}</div>
                                                        <div className="text-sm opacity-50">{job.location}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="font-medium">
                                                {job.company}
                                                <br />
                                            </td>
                                            <td className="font-medium hidden md:table-cell">{job.category}</td>
                                            <th>
                                                <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xl text-xs font-medium">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                ) :
                    <div className="flex justify-center items-center gap-4 md:gap-20">
                        <Lottie className="w-48 md:w-md" animationData={notFound}>

                        </Lottie>
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold">No Applying Job Found</h2>
                            <p className="font-medium pt-2 md:pt-4 lg:text-center">
                            <Link  to={'/'}>Browse Our Job && Apply</Link>

                            </p>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyApplication;