import { Helmet } from "react-helmet";
import Features from "../sections/HomeSections/Features";
import HeroBanner from "../sections/HomeSections/HeroBanner";
import LetsStarted from "../sections/HomeSections/LetsStarted";
import PopularClasses from "../sections/HomeSections/PopularClasses";
import PopularInstructors from "../sections/HomeSections/PopularInstructors";
import WhyChoose from "../sections/HomeSections/WhyChoose";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Eco Learner | e-Learning School React Template</title>
            </Helmet>
            <HeroBanner />
            <Features />
            <PopularClasses />
            <PopularInstructors />
            <WhyChoose />
            <LetsStarted />
        </>
    );
};

export default Home;