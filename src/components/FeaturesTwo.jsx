import angle from "../assets/images/angles.jpg";

const FeaturesTwo = () => {
    return (  
        <div className="min-h-screen flex flex-col">
                    <div className="flex-grow flex flex-col justify-center p-4 sm:p-6">
                        <div className="container mx-auto">
                            <div className="flex flex-col md:flex-row items-center justify-center">
                                <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
                                    <div className="flex flex-col gap-4">
                                        <p className="Raleway text-lg text-[#DF8928] font-semibold tracking-widest uppercase">Powerful simplicity</p>
                                        <h3 className="Raleway text-3xl text-[#4B4B4B] font-bold">Enter the future of farming</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex">
                                                <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                                <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                                <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                            </div>
                                            <p className="Raleway text-lg text-[#4B4B4B] font-semibold">Pest control</p>
                                            <p className="Raleway text-[#4B4B4B]">We provide all the data you need to know about your crops in just a few clicks.</p>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex">
                                                <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                                <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                                <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                                <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                            </div>
                                            <p className="Raleway text-lg text-[#4B4B4B] font-semibold">AI-powered scanning</p>
                                            <p className="Raleway text-[#4B4B4B]">Skydrone uses AI, machine learning and computer vision for real-time crop scanning.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 h-96 md:h-screen flex justify-center clip-md_2 outline-hidden">
                                    <img src={angle} alt=""className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
 
export default FeaturesTwo;