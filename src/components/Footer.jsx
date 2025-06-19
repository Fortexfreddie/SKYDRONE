import skydroneIcon from "../assets/icons/Group 2.svg";
import ig_logo from "../assets/icons/ig_logo.png";
import fb_logo from "../assets/icons/fb_logo.png";
import yt_logo from "../assets/icons/yt_logo.png";

const Footer = () => {
    return (  
        <footer className="bg-[#4B4B4B] text-white p-10">
            <div className="container mx-auto">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
                        <div className="flex items-center justify-center">
                            <a href="\" className='flex items-center gap-2'>
                                <img src={skydroneIcon} alt="Skydrone Icon" />
                                <span className="Raleway tracking-wide text-2xl font-bold">SKYDRONE</span>
                            </a>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <img src={ig_logo} alt="instagram logo" className="h-5 cursor-pointer" />
                            <img src={fb_logo} alt="facebook logo" className="h-5 cursor-pointer"/>
                            <img src={yt_logo} alt="youtube logo" className="h-4 cursor-pointer"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-col gap-2 Raleway text-xs text-center">
                                <li className="cursor-pointer">Clients</li>
                                <li className="cursor-pointer">Features</li>
                                <li className="cursor-pointer">Download App</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-[#5E5E5E] pt-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-center Raleway text-gray-300">
                                <p className="cursor-pointer">Privacy Policy</p>
                                <p className="cursor-pointer">Terms of Service</p>
                                <p className="cursor-pointer">Cookies Settings</p>
                            </div>
                            <div className="Raleway flex items-center text-center">
                                <p className="text-xs text-[#F3F3F3]">Copyright &copy; 2022 SkyDrone by @apta.agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;