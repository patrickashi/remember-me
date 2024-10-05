import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import '@fontsource/yatra-one'; 
import '@fontsource/bangers';
import '@fontsource/luckiest-guy';

const Sectwo = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div className="px-4 md:px-20 py-32 bg-[#3b82f6] text-gray-100">
            <div ref={ref} className={`w-full md:w-[700px]  transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="mb-6 bg-white text-xs font-luckiest text-gray-800 py-1 px-2 rounded-tr-xl">WELCOME</button>
                <h2 className="text-3xl md:text-5xl mb-4 font-bangers">
                    HOW ARE YOU DOING TODAY? ARE YOU OKAY?
                </h2>
            </div>
        </div>
    )
}

export default Sectwo;