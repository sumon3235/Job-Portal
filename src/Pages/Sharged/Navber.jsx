import { useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/logo.png"
import Swal from "sweetalert2";


const Navber = () => {

    // Dynamic Create NavLink
    const links = <>
        <NavLink>Item 1 </NavLink>
        <NavLink>Item 3</NavLink>
    </>

    const { user, setUser, signOutUser } = useContext(AuthContext);

    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                setUser(null)
                Swal.fire({
                    title: 'Succes',
                    text: "SignOut Succesfull",
                    icon: 'Succes',
                    confirmButtonText: 'Close'
                })
                    .catch((error) => {
                        Swal.fire({
                            title: 'Error!',
                            text: error.message,
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        })
                    })
            })
    }
    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-2.5">
                        <img className="w-10" src={logo} alt="" />
                        <h2 className="text-lg font-bold">Job Portal</h2>

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-6 font-medium">

                    {
                        user ? <>
                        <button className="btn" onClick={handleSignOutUser}>Sign Out</button></> : 
                        <> <NavLink to={"/register"}>Register</NavLink>
                         <NavLink to="/signin">Login</NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};
export default Navber;