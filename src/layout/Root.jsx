import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <div className="w-[95%] md:w-[80%] mx-auto max-w-[1440px]">
                <Navbar />
            </div>
            <div className="w-[95%] md:w-[80%] mx-auto max-w-[1440px] min-h-[calc(100vh-314px)]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;