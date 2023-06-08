import Features from "../sections/HomeSections/Features";
import HeroBanner from "../sections/HomeSections/HeroBanner";
import PopularClasses from "../sections/HomeSections/PopularClasses";
import PopularInstructors from "../sections/HomeSections/PopularInstructors";
import WhyChoose from "../sections/HomeSections/WhyChoose";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Features />
            <PopularClasses />
            <PopularInstructors />
            <WhyChoose />
        </>
    );
};

export default Home;