import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import '@fontsource/yatra-one'; 
import '@fontsource/bangers';
import '@fontsource/luckiest-guy';
import '@fontsource/oleo-script'; // Defaults to weight 400
import '@fontsource/oleo-script/700.css'

const Sectwo = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div className="group px-4 md:px-20 py-32 bg-[#3b82f6] hover:bg-emerald-100 text-gray-100">
            <div ref={ref} className={`w-full md:w-[700px]  transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="group-hover:bg-[#3b82f6] mb-6 bg-white text-xs font-oleo text-gray-800 group-hover:text-white py-1 px-2 rounded-tr-xl">WELCOME</button>
                <h2 className="group-hover:text-[#3b82f6] text-3xl md:text-5xl mb-4 font-bold font-oleo group-hover:scale-105 duration-200">
                    HOW ARE YOU DOING TODAY? ARE YOU OKAY?
                </h2>
            </div>
        </div>
    )
}

export default Sectwo;