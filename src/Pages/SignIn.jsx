import Lottie from 'lottie-react';
import loginAnimation from '../assets/Lottie-animation/Login User.json'
import { useContext, useRef, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
import SocialLogin from './Sharged/SocialLogin';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {

    const { signInUser, handleForgotPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);

    // const Hanlde a form data ana post a data for backend
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
                navigate(from);
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

    // handle forgotPassword
    const handleForgotpass = () => {

        const email = emailRef.current.value;

        if (!email) {
            toast.error('Please Provide Your email');
            return
        }

        handleForgotPassword(email)
            .then(() => {
                toast.success('If your email was register our database, then we can provide reset link your mail, please chek your mail. Thank You 🥰'), {
                    autoComplete: 5000,
                }

            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    toast.error('please first register your account')
                }
                else {
                    toast.error(error.message)
                }
            })
    }

    return (
        <div>
            <div className="hero bg-base-200  min-h-[65vh]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20 ">
                    <div className="text-center lg:text-left">

                        {/* Lottie Animation */}
                        <Lottie className='w-96' animationData={loginAnimation}></Lottie>

                    </div>
                    <form onSubmit={handleLoginData}>
                        <div className="card w-full max-w-2xl bg-linear-to-r from-cyan-500 to-blue-500">
                            <h1 className="text-5xl font-bold m-4">Login Now!</h1>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" ref={emailRef} className="input border-blue-500 focus:outline-none focus:border-blue-700 border-2" name='email' placeholder="Email" autoComplete="email" required />

                                    <div className='relative'>
                                        <label className="label">Password</label>
                                        <input type={showPassword ? 'text' : 'password'} className="input border-blue-500 focus:outline-none focus:border-blue-700 border-2" name='password' placeholder="Password" autoComplete='new-password' required />
                                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-8'>
                                            {
                                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                            }
                                        </button>
                                    </div>

                                    <div onClick={handleForgotpass}><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                            <div className='m-2 text-center'>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;