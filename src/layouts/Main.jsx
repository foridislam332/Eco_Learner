import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../components/ScrollToTop";
import Loading from "../components/Loading";

const Main = () => {
    const navigation = useNavigation();

    let content;
    if (navigation.state === "loading") {
        content = <Loading />
    }
    else if (navigation.state !== "loading") {
        content = <Outlet />
    }

    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                {content}
            </main>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Main;