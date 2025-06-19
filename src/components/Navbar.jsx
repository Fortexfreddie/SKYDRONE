import skydroneIcon from "../assets/icons/Group 2.svg";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    // State to manage the mobile menu visibility
    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <div className="absolute top-0 left-0 right-0 z-10">
            <nav className="flex flex-col px-4 sm:px-6 lg:px-10 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="\" className='flex items-center gap-2'>
                            <img src={skydroneIcon} alt="Skydrone Icon" />
                            <span className="Raleway tracking-wide text-2xl font-bold text-[#393939]">SKYDRONE</span>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <ul className="Raleway text-[#4B4B4B] flex gap-4">
                            <li className="hover:text-gray-950"><a href="#Clients">Clients</a></li>
                            <li className="hover:text-gray-950"><a href="#Features">Features</a></li>
                            <li className="hover:text-gray-950"><a href="#Download">Download App</a></li>
                        </ul>
                        <button className="flex items-center justify-center Raleway px-4 py-2 bg-[#C4730A] rounded-sm text-white cursor-pointer shadow-sm hover:bg-[#C4730A]/90">Contact Us</button>
                    </div>
                    <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer md:hidden text-gray-600">
                        { menuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/> }
                    </div>
                </div>
                <div
                    className={`transition-all duration-500 ease-in-out transform overflow-hidden ${menuOpen ? 'opacity-100 scale-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 scale-95 -translate-y-2 max-h-0'}`}>
                    <div className="flex flex-col md:hidden gap-4 py-4 bg-[#e3f8fd]/90 p-4">
                        <ul className="Raleway text-gray-950 flex-col gap-4">
                            <li><a href="#Clients">Clients</a></li>
                            <li><a href="#Features">Features</a></li>
                            <li><a href="#Download">Download App</a></li>
                            <li><a href="#Contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;