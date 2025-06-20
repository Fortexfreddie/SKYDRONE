import Navbar from "../components/Navbar";
import delivery from "../assets/icons/delivery.png";
import drone from "../assets/icons/drone.png";

const Feature = () => {
    return (  
        <div className="flex flex-col">
            <div className="relative flex-grow">
                <div className="absolute inset-0 bg-[url('./assets/images/CTA.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="mb-20">
                    <Navbar />
                </div>
                <div className="flex flex-col justify-center p-4 sm:p-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-10 mb-10">
                            <div className="flex flex-col items-center text-justify md:w-[50%] mx-auto gap-4">
                                <h1 className="Raleway text-4xl font-bold text-[#4B4B4B] leading-tight">Features</h1>
                                <p className="Raleway text-lg lg:text-base text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={delivery} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Tool Delivery</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={drone} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Drones</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={delivery} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Tool Delivery</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={drone} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Drones</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={delivery} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Tool Delivery</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={drone} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Drones</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={delivery} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Tool Delivery</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4 gap-4 bg-[#612B00]/30 shadow-lg z-10">
                                    <div className="flex flex-col gap-2 items-center">
                                        <div>
                                            <img src={drone} alt="delivery image" className="h-14"/>
                                        </div>
                                        <p className="Raleway font-semibold text-sm text-[#612B00]">Drones</p>
                                    </div>
                                    <div>
                                        <p className="Raleway text-sm text-center text-[#612B00]">Lorem, ipsum dolor sit amet conse adipisicing elit. Consequuntur, ratione. Illo quis quaerat officiis pariatur tempora iure quisquam explicabo. Omnis ut pariatur cum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6 z-10">
                                <button className="flex items-center justify-center Raleway px-5 py-2 bg-[#C4730A] rounded-sm text-white cursor-pointer shadow-sm hover:bg-[#C4730A]/90">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Feature;