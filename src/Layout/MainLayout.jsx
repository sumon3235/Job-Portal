import { Outlet } from "react-router";
import Navber from "../Pages/Sharged/Navber";
import Footer from "../Pages/Sharged/Footer";

const MainLayout = () => {

    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
};

export default MainLayout;