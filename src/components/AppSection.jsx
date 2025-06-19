import apple from '../assets/icons/apple.png';
import google from '../assets/icons/google.png';

const AppSection = () => {
    return (  
        <div className="flex flex-col">
            <div className="flex-grow flex flex-col justify-center p-4 sm:p-6 bg-gradient-to-r from-[#D48C04] to-[#B35911]">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between gap-6 items-center py-4">
                        <div className='flex flex-col items-center lg:items-start text-center lg:text-start gap-4 md:gap-2'>
                            <p className='Raleway text-xl font-bold text-[#FCF6F0]'>Download our app</p>
                            <p className='Raleway text-sm text-[#FCF6F0]'>We're an agtech company with a clear mission: to revolutionize farming by using AI and drone technology.</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 mt-4 md:mt-0'>
                            <button className='flex items-start text-start gap-2 border border-white px-4 py-2 rounded-md shadow-sm cursor-pointer text-white'>
                                <img src={apple} alt="" className='h-8' />
                                <div>
                                    <p className='Raleway text-xs'>Download on the</p>
                                    <p className='Raleway text-sm font-semibold'>App Store</p>
                                </div>
                            </button>
                            <button className='flex items-start text-start gap-2 border border-white px-4 py-2 rounded-md shadow-sm cursor-pointer text-white'>
                                <img src={google} alt="" className='h-8' />
                                <div>
                                    <p className='Raleway text-xs'>Get it on</p>
                                    <p className='Raleway text-sm font-semibold'>Google Play</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AppSection;