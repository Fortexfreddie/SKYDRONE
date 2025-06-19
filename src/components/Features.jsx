import angle from "../assets/images/angles.jpg";

const Features = () => {
    return (  
        <div id="Features" className="min-h-screen md:min-h-[50vh] xl:min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col justify-center p-4 sm:p-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="w-full md:w-1/2 h-96 xl:h-screen flex justify-center clip-md outline-hidden">
                            <img src={angle} alt=""className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
                            <div className="flex flex-col gap-4">
                                <p className="Raleway text-lg text-[#DF8928] font-semibold tracking-widest uppercase">Modern Technology</p>
                                <h3 className="Raleway text-3xl text-[#4B4B4B] font-bold">More than just a drone company</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                    <p className="Raleway text-lg text-[#4B4B4B] font-semibold">Modern machinery</p>
                                    <p className="Raleway text-[#4B4B4B]">Skydrones are designed for large-scale farming operations, so that you can always stay on top of your farm's health.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex">
                                        <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                        <span className="bg-[#DF8928] h-1 w-1 p-1 rounded-full"></span>
                                    </div>
                                    <p className="Raleway text-lg text-[#4B4B4B] font-semibold">Modern machinery</p>
                                    <p className="Raleway text-[#4B4B4B]">Skydrones are designed for large-scale farming operations, so that you can always stay on top of your farm's health.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Features;