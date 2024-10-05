import React from "react"
import leahyurfset from "../Assets/leahyurfset.jpg";
import nelayliuay from "../Assets/nelayliuay.jpg";
import roygold from "../Assets/roygold.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import '@fontsource/bangers';
import '@fontsource/luckiest-guy';

const Testimonials = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="px-4 md:px-20 py-20  duration-200">
            <div ref={ref} className={` transition-transform duration-200 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-2 py-1 bg-[#3b82f6] text-gray-100 font-luckiest">TESTIMONIALS</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-4xl  text-gray-800 font-luckiest">Hear inspiring, authentic, and transformative stories from our community.</h2>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="flex justify-center border border-gray-400 py-8 px-2 md:6 w-100">
                        <img src={leahyurfset} alt="img" className=" w-80 h-60 rounded-lg object-cover"/>
                    </div>
                    <div className="text-center w-100 border border-gray-400 py-6 px-2 md:6">
                        <p className="text-gray-600 mb-4 text-sm">
                            Before joining, I felt isolated. This community has given me strength and hope,
                            making all the difference in my journey.
                        </p>
                        <p className="text-gray-900 font-semibold">Sarah T</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center border border-gray-400 py-8 px-2 md:6 w-100">
                        <img src={roygold} alt="img" className=" w-80 h-60 rounded-lg object-cover"/>
                    </div>
                    <div className="text-center w-100 border border-gray-400 py-6 px-2 md:6">
                        <p className="text-gray-600 mb-4 text-sm">
                            This community is my safe space. The compassion I’ve received here
                            has been crucial in my healing process
                        </p>
                        <p className="text-gray-900 font-semibold">James R</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center border border-gray-400 py-8 px-2 md:6 w-100">
                        <img src={nelayliuay} alt="img" className=" w-80 h-60 rounded-lg object-cover"/>
                    </div>
                    <div className="text-center w-100 border border-gray-400 py-6 px-2 md:6">
                        <p className="text-gray-600 mb-4 text-sm">
                                Being part of this community has been transformative. The resources and
                             support have empowered me to take control of my mental well-being.</p>
                        <p className="text-gray-900 font-semibold">Osha Aniseya</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;