import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer";

const Main = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;