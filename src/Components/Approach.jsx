import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import '@fontsource/bangers';
import '@fontsource/luckiest-guy';

const Approach = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="px-4 md:px-20 pt-20  duration-200">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-luckiest bg-[#3b82f6] text-gray-200">APPROACH</button>
                <h2 className="mt-4 mb-8 text-2xl md:text-4xl font-luckiest text-gray-800">
                    Holistic, compassionate, empowering mental health support.</h2>
            </div>

            <div className="py-20 px-4 md:px-10 bg-[#3b82f6] text-gray-100 text-2xl  md:rounded-tr-[100px] ">
                <p className="text-start">
                    Everyone’s mental health journey is unique, and so is our approach. We tailor our resources, support,
                    and guidance to meet you where you are, recognizing that there’s no one-size-fits-all solution.
                    Our goal is to provide you with the tools and support you need to navigate your specific challenges
                    in a way that resonates with you.
                </p>
            </div>
        </div>

    )
}

export default Approach;