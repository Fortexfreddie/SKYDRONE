import Hero from "../components/Hero";
import ClientsSection from "../components/ClientsSection";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import FeaturesTwo from "../components/FeaturesTwo";
import CtaSection from "../components/CtaSection";
import AppSection from "../components/AppSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div className="min-w-2xs">
            <Hero />
            <ClientsSection />
            <Features />
            <Testimonial />
            <FeaturesTwo />
            <CtaSection />
            <AppSection />
            <Contact />
            <Footer />
        </div>
    );
}
 
export default Home;