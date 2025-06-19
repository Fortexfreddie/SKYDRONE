import img1 from "../assets/company Images/remix.png";
import img2 from "../assets/company Images/stenciljs.png";
import img3 from "../assets/company Images/Group.png";
import img4 from "../assets/company Images/Group2.png";
import img5 from "../assets/company Images/atom.png";
import img6 from "../assets/company Images/terraform.png";
import img7 from "../assets/company Images/Group3.png";

const ClientsSection = () => {
    return ( 
        <div id="Clients" className="min-h-screen md:min-h-[50vh] xl:min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col justify-center p-4 sm:p-6">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h2 className="Raleway text-[#4B4B4B] text-lg md:text-xl font-semibold mb-14">Used by the world's most innovative companies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
                            <div className="flex justify-center">
                                <img src={img1} alt="" className="h-10 md:h-8 w-auto" />
                            </div>
                            <div className="flex justify-center">
                                <img src={img2} alt="" className="h-10 md:h-8 w-auto" />
                            </div>
                            <div className="flex justify-center">
                                <img src={img3} alt="" className="h-10 md:h-8 w-auto" />
                            </div>
                            <div className="flex justify-center">
                                <img src={img4} alt="" className="h-10 md:h-8 w-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="flex justify-center">
                                <img src={img5} alt="" className="h-10 md:h-8 w-auto" />
                            </div>
                            <div className="flex justify-center">
                                <img src={img6} alt="" className="h-10 md:h-8 w-auto" />
                            </div>
                            <div className="flex justify-center">
                                <img src={img7} alt="" className="h-10 md:h-8 w-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex justify-center items-center bg-[#F3F3F3] py-4">
                <div className="flex justify-center items-center gap-4">
                    <p className="Raleway text-[#5E5E5E] text-sm font-semibold">Daily Updates</p>
                    <span className="bg-[#5E5E5E] p-0.5 rounded-full"></span>
                    <p className="Raleway text-[#5E5E5E] text-sm font-semibold">Save Money</p>
                    <span className="bg-[#5E5E5E] p-0.5 rounded-full"></span>
                    <p className="Raleway text-[#5E5E5E] text-sm font-semibold">Modern Technology</p>
                    <span className="bg-[#5E5E5E] p-0.5 rounded-full"></span>
                    <p className="Raleway text-[#5E5E5E] text-sm font-semibold">Drones</p>
                    <span className="bg-[#5E5E5E] p-0.5 rounded-full"></span>
                    <p className="Raleway text-[#5E5E5E] text-sm font-semibold">Farms</p>
                </div>
            </div>
        </div>
    );
}
 
export default ClientsSection;