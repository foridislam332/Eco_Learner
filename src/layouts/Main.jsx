import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <>
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