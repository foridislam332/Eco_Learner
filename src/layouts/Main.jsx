import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Main;