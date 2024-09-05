import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";



const Depression = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex flex-col md:flex-col lg:flex-row gap-12 px-4 md:px-20 pt-20  duration-200 bg-white border-y text-gray-800 border-gray-300">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                
                <h2 className="mt-4 mb-8 text-3xl md:text-3xl font-mono ">Are you Strugling with Depression?</h2>
            </div>

            <div className="custom-scrollbar flex flex-col    justify-between gap-4 py-1 text-md mb-4 md:mb-20 ">
                <p>
                    Thank you all for being here today. I want to speak about a topic that many of us face but often
                    feel alone in : depression.
                </p>
                <p>
                    Depression is a heavy burden, a cloud that can overshadow our brightest days and diminish our joy.
                    It's more than sadness; it's a profound struggle that affects every aspect of our lives. 
                    But it's important to remember that experiencing depression is not a sign of weakness.
                    It's a part of being human, and it's okay to not be okay.
                </p>
                <p>
                    Acknowledging our pain is the first step toward healing. Reach out for support-whether it's 
                    friends, family or professionals. Sharing our feelings can lighten the load. And remember, it's 
                    a journey, not a race. Healing takes time, and it's important to be patient and gentle with ourselves.
                </p>
                <p>
                    You are not alone in this. Together, we can find strength, hope, and the courage to move forward, 
                    one step at a time.
                </p>
                <i className="text-xs">posted on 30th aug 2024</i>
            </div>
            

            
        </div>

    )
}

export default Depression;