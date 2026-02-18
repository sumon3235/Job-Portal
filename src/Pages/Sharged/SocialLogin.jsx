import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {

const location = useLocation();
const navigate = useNavigate();
const from = location.state || '/';

    const {signInWithGoogle} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user)
            navigate(from);
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="divider">or</div>
            <button onClick={handleGoogleSignIn} type="button" className="btn text-blue-600"><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;