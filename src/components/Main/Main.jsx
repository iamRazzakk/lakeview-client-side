import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/singup')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            <div className="md:mt-12">
                {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;