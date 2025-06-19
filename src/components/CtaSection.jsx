const CtaSection = () => {
    return (  
        <div className="relative min-h-[70vh] xl:min-h-screen flex flex-col">
            <div className="absolute inset-0 bg-[url('./assets/images/CTA.jpg')] bg-cover bg-center opacity-80"></div>
            <div className="relative flex-grow flex flex-col p-4 sm:p-6">
                <div className="container mx-auto">
                    <div className="flex flex-col text-center py-10 gap-4">
                        <h1 className="Raleway text-3xl text-[#4B4B4B] font-bold">Drones are the future of agriculture</h1>
                        <p className="Raleway text-[#4B4B4B] leading-relaxed">Get a bird's eye view of your fields and get a more accurate <br /> estimation of crop yield.</p>
                        <div className="flex justify-center mt-6">
                            <button className="flex items-center justify-center Raleway px-4 py-2 bg-[#C4730A] rounded-sm text-white cursor-pointer shadow-sm hover:bg-[#C4730A]/90">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CtaSection;