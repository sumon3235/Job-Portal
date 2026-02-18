import Lottie from 'lottie-react';
import registerLottieData from '../../assets/Lottie-animation/Login Leady.json'
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../Sharged/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const Register = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const {createUser} = useContext(AuthContext);

    const handleRegisterData = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if(!regex.test(password)) {
            setError('passwor must be one uppercase and one lowercase')
            return
        }
        else {
            setError('')
        }

        setError('');
        setSuccess(false);
        
        // create user
        createUser(email, password)
        .then(res => {
            console.log(res.user)
            setSuccess('User Registation Successfully');
            navigate(from);
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left">

                        {/* Lottie Animation */}
                        <Lottie className='w-96' animationData={registerLottieData}></Lottie>

                    </div>
                    <form onSubmit={handleRegisterData}>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-5xl font-bold m-4">Register Now!</h1>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" autoComplete="email"/>
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" autoComplete='new-password'/>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </div>
                
                        {
                            error && <p className='font-semibold my-2 text-red-500 text-center'>{error}</p>
                        }
                        {
                            success && <p className='font-semibold my-2 text-green-500 text-center'>Registation Succesfull</p>
                        }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;