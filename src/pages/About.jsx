import Navbar from "../components/Navbar";
import img1 from "../assets/images/hero_image.jpg";
import img2 from "../assets/images/angles.webp";
import img3 from "../assets/images/CTA.jpg";

const About = () => {
    return (  
        <div className="flex flex-col">
            <div className="relative flex-grow">
                <div className="absolute inset-0 bg-[url('./assets/images/CTA.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="mb-20">
                    <Navbar />
                </div>
                <div className="flex flex-col justify-center sm:p-6 text-justify">
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-10 mb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-[80%] mx-auto">
                                <div className="flex flex-col gap-6 md:gap-2 items-center md:items-start">
                                    <h1 className="Raleway text-4xl font-bold text-[#4B4B4B] leading-tight">About Us</h1>
                                    <p className="Raleway text-lg lg:text-base text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum, repudiandae neque nobis laboriosam tempore autem non?</p>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <img src={img1} alt="" className="h-[35vh] w-full z-10"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-[80%] mx-auto">
                                <div className="flex flex-col justify-center items-start order-2 md:order-1">
                                    <img src={img2} alt="" className="h-[35vh] w-full z-10"/>
                                </div>
                                <div className="flex flex-col gap-6 md:gap-2 items-center md:items-start order-1 md:order-2">
                                    <h1 className="Raleway text-4xl font-bold text-[#4B4B4B] leading-tight">Our Mission</h1>
                                    <p className="Raleway text-lg lg:text-base text-[#612B00]">Lorem ipsum dolor sit, amet conse adipisicing elit. Provident, rerum eius dolorum deleniti, sapiente placeat animi ex cumque illum sint assumenda possimus. Quibusdam accusantium tempora voluptatum error iste totam deleniti?</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-[80%] mx-auto">
                                <div className="flex flex-col gap-6 md:gap-2 items-center md:items-start">
                                    <h1 className="Raleway text-4xl font-bold text-[#4B4B4B] leading-tight">Our Journey</h1>
                                    <p className="Raleway text-lg lg:text-base text-[#612B00]">Lorem ipsum dolor sit, amet conse adipisicing elit. Provident, rerum eius dolorum deleniti, sapiente placeat animi ex cumque illum sint assumenda possimus. Quibusdam accusantium tempora voluptatum error iste totam deleniti?</p>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <img src={img3} alt="" className="h-[35vh] w-full z-10"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;