import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import arduinohand from '../Assets/arduinohand.mp4';
import Searchomponent from "./Searchcomponent";
import Choosecategory from "./Choosecategory";
import Mentalhealth from "./Mentalhealth";
import Professionalhelp from "./Professionalhelp";
import Mentaltreatments from "./Mentaltreatments";



const Faq = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-12 px-4 md:px-20 pt-10 pb-4  duration-200  border-t border-gray-300">
            <div ref={ref} className={`w-full md:w-[300px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-semibold bg-[#3b82f6] text-gray-100">FAQ</button>
                <h2 className="mt-4 mb-2 text-4xl md:text-5xl font-mono text-gray-800">You're Probably Wondering..</h2>
            </div>

            <div className="flex flex-col">
                <div className="custom-scrollbar flex flex-col h-60 overflow-y-scroll  justify-between gap-4 py-0 text-gray-800 text-md mb-2 md:mb-4 ">
                    <h2 className="text-start md:text-center text-md md:text-3xl font-mono">Frequently Asked Questions</h2>
                    <Searchomponent />
                    
                </div>

                <div>
                    <Choosecategory />
                </div>

                <div>
                    <Mentalhealth />
                </div>
                <div className="my-2">
                    <Professionalhelp />
                </div>
                <div>
                    <Mentaltreatments />
                </div>
            </div>


            <div className="hexagon-wrapper flex justify-center">
                <div className="hexagon flex justify-center">
                    <video autoPlay muted loop>
                        <source src={arduinohand} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

    )
}

export default Faq;