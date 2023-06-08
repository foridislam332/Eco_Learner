import Features from "../sections/Features";
import HeroBanner from "../sections/HomeSections/HeroBanner";
import PopularClasses from "../sections/HomeSections/PopularClasses";
import PopularInstructors from "../sections/HomeSections/PopularInstructors";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Features />
            <PopularClasses />
            <PopularInstructors />
        </>
    );
};

export default Home;