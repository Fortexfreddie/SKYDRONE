import Hero from "../components/Hero";
import ClientsSection from "../components/ClientsSection";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import FeaturesTwo from "../components/FeaturesTwo";

const Home = () => {
    return ( 
        <div className="min-w-2xs">
            <Hero />
            <ClientsSection />
            <Features />
            <Testimonial />
            <FeaturesTwo />
        </div>
    );
}
 
export default Home;