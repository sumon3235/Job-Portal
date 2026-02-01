import Lottie from 'lottie-react';
import loginAnimation from '../assets/Lottie-animation/Login User.json'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { signInUser } = useContext(AuthContext);
    const handleLoginData = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'X'
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'X'
                })
            })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">

                        {/* Lottie Animation */}
                        <Lottie className='w-96' animationData={loginAnimation}></Lottie>

                    </div>
                    <form onSubmit={handleLoginData}>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-5xl font-bold m-4">Login Now!</h1>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" autoComplete="email" required/>
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" autoComplete='new-password' required/>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;