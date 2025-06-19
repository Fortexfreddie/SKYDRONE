import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (  
        <div className="min-h-screen md:min-h-[50vh] xl:min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col p-4 sm:p-6">
                <div className="container mx-auto my-10">
                    <div>
                        <div className='flex flex-col gap-2 mb-8'>
                            <p className='Raleway text-[#C4730A] tracking-wider uppercase font-semibold'>Contact</p>
                            <h2 className='Raleway text-2xl text-[#4B4B4B] font-bold'>Talk to Us</h2>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between mb-4 gap-8'>
                            <div>
                                <div className='w-full md:w-1/2 flex flex-col gap-2 mb-6'>
                                    <FaEnvelope className='text-[#C4730A]' />
                                    <h3 className='Raleway text-[#4B4B4B] font-semibold'>Email</h3>
                                    <p className='Raleway text-sm text-[#4B4B4B] font-extralight'>contact@skydrone.com.br</p>
                                </div>
                                <div className='flex flex-col gap-2 mb-6'>
                                    <FaPhone className='text-[#C4730A]' />
                                    <h3 className='Raleway text-[#4B4B4B] font-semibold'>Phone</h3>
                                    <p className='Raleway text-sm text-[#4B4B4B] font-extralight'>+55 51 99999-9999</p>
                                </div>
                                <div className='flex flex-col gap-2 mb-6'>
                                    <FaMapMarkerAlt className='text-[#C4730A]' />
                                    <h3 className='Raleway text-[#4B4B4B] font-semibold'>Address</h3>
                                    <p className='Raleway text-sm text-[#4B4B4B] font-extralight'>451-487 Quincy St, Maywood, IL 60153, USA</p>
                                </div>
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.2306016726913!2d7.042208614810536!3d5.482514634864407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104257f1e93e9c91%3A0x82b6db431da83265!2sConcord%20Hotels%2C%20Owerri%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1605094741423!5m2!1sen!2sng" 
                                    className='w-full h-64 md:h-80' 
                                    allowfullscreen="" 
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;