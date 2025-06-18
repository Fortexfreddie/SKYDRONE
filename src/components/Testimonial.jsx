import user1 from "../assets/users/user1.png";
import user2 from "../assets/users/user2.png";
import user3 from "../assets/users/user3.png";
const Testimonial = () => {
    return (  
        <div className="py-10 flex flex-col">
            <div className="flex-grow flex flex-col justify-center p-4 sm:p-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <img src={user1} alt="" className="h-20 w-20 rounded-full"/>
                            </div>
                            <div className="mb-6">
                                <h3 className="Roboto font-semibold">Customer name</h3>
                                <p className="Roboto text-sm">Position, Company name</p>
                            </div>
                            <div>
                                <p className="Raleway text-md font-extralight">"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <img src={user2} alt="" className="h-20 w-20 rounded-full"/>
                            </div>
                            <div className="mb-6">
                                <h3 className="Roboto font-semibold">Customer name</h3>
                                <p className="Roboto text-sm">Position, Company name</p>
                            </div>
                            <div>
                                <p className="Raleway text-md font-extralight">"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="mb-4">
                                <img src={user3} alt="" className="h-20 w-20 rounded-full"/>
                            </div>
                            <div className="mb-6">
                                <h3 className="Roboto font-semibold">Customer name</h3>
                                <p className="Roboto text-sm">Position, Company name</p>
                            </div>
                            <div>
                                <p className="Raleway text-md font-extralight">"A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Testimonial;