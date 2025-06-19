import Navbar from "./Navbar";
import bgImage from "../assets/images/hero_image.jpg";
const Hero = () => {
    return ( 
        <div className="flex flex-col min-h-screen md:min-h-[50vh] xl:min-h-screen">
            <div className="relative flex-grow">
                <div className="container mx-auto">
                    <Navbar />
                    <div className="absolute inset-0 flex">
                        <div className="relative w-full lg:w-1/2 lg:bg-white flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-10 clip-lg">
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                                <div className="mb-10 lg:mb-6">
                                    <h1 className="Raleway text-4xl font-bold text-[#4B4B4B] mb-10 lg:mb-6 leading-tight">
                                        Saving the world and <br className="hidden lg:block"/>growing crops
                                    </h1>
                                    <p className="Raleway text-lg lg:text-base text-[#612B00]">Skydrone's innovative drone technology is bringing the <br className="hidden lg:block"/>latest farming innovations to farms around the world.</p>
                                </div>
                                <div>
                                    <button className="Raleway flex items-center justify-center Raleway px-4 py-2 bg-[#df8928] rounded-sm text-white shadow-sm hover:bg-[#C4730A]/90 cursor-pointer tracking-wider">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={bgImage} className="w-full h-screen md:h-[50vh] xl:h-screen object-cover" alt="" />
            </div>
        </div>
    );
}
 
export default Hero;