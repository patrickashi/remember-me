import React from "react"
import banner1 from "../Assets/banner1.jpg";
import pic1 from "../Assets/pic1.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Secone = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex justify-center flex-col md:flex-row mx-4 md:mx-20 py-20 mt-10 md:mt-20 mb-12 text-gray-700">
            <div ref={ref} className={`w-full md:w-[600px]   transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <h2 className="text-4xl md:text-4xl mt-12">Welcome to a Place of Understanding and Healing.</h2>
                <p className="my-6 text-xl">
                    Whether you're seeking information, inspiration, or just a listening ear, we're here for you.
                    Your journey matters, and we're honored to be a part of it.
                </p>
                <button className="bg-[#3b82f6] text-white px-4 rounded-md py-2 font-thin">
                    Contact Us
                </button>
            </div>

            <div ref={ref} className={`flex justify-center items-center mt-8 md:mt-0 w-full md:w-[600px]  transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <img src={pic1} alt="banner" className="rounded-xl md:rounded-l-full " />
            </div>
        </div>
    )
}

export default Secone;