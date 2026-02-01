import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user)
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