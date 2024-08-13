import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import photo1 from "../Assets/photo1.jpg";


const About = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex flex-col md:flex-col lg:flex-row gap-12 px-4 md:px-20 pt-20  duration-200 bg-[#3b82f6] border-t border-gray-300">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-semibold bg-gray-100 text-gray-800">ABOUT</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-3xl font-mono text-gray-200">All About Remember-me</h2>
            </div>

            <div className="custom-scrollbar flex flex-col h-80 overflow-y-scroll  justify-between gap-4 py-10 text-gray-200 text-md mb-4 md:mb-20 ">
                <p>
                    We believe in the power of connection, understanding, and support. Mental health is not a solitary journey, it's one that should
                    be walked hand in hand with others who understand, care, and stand by you in every step.
                </p>
                <p>
                    Our mission is simple yet profound: to remind you that you are never alone in your struggles. We are here to create a safe and
                    nurturing space where your voice is heard, your feelings are validated, and your experiences are met with compassion.
                </p>
                <p>
                    We understand that mental health challenges can feel overwhelming, isolating, and, at times, insurmountable. But we also know
                    that with the right support, hope can be rekindled, and healing is possible. We are committed to being that beacon of hope,
                    offering resources, stories, and a community that lifts you up when the weight of the world feels too heavy.
                </p>
                <p>
                    At Remember me, we’re more than just a resource—we’re a lifeline, a community, and a reminder that your mental health matters,
                    and so do you. Whether you’re seeking information, needing a place to share your story, or just looking for reassurance that someone cares, we’re here for you.
                </p>
                <p>
                Because no matter how dark the days may seem, there’s a light within you that never goes out. And together, we can find the way forward.
                </p>
            </div>

            <div className="flex items-end justify-center">
              <img src={photo1} alt="img" className="w-full rounded-md md:w-[600px]" />
            </div>
        </div>

    )
}

export default About;