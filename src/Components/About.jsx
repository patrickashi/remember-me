import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import photo1 from "../Assets/photo1.jpg";
import '@fontsource/bangers';
import '@fontsource/luckiest-guy';


const About = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex flex-col md:flex-col lg:flex-row gap-12 px-4 md:px-20 pt-20  duration-200 bg-[#3b82f6] border-t border-gray-300">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-semibold bg-gray-100 text-gray-800 font-luckiest">ABOUT</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-3xl  text-gray-200 font-bangers">All About Remember-me</h2>
            </div>

            <div className="custom-scrollbar flex flex-col h-80 overflow-y-scroll  justify-between gap-4 py-10 text-gray-200 text-md mb-4 md:mb-20 ">
                <p>
                    At Remember Me, we believe in the power of connection, understanding, and support. Mental health is not a solitary journey, it’s one that
                    should be walked hand in hand with others who understand, care, and stand by you every step of the way.
                </p>
                <p>
                    Our mission is simple yet profound: to remind you that you are never alone in your struggles. We are here to create a safe and nurturing space where your voice is heard,
                    your feelings are validated, and your experiences are met with compassion.
                </p>
                <p>
                    We understand that mental health challenges can feel overwhelming, isolating, and, at times, insurmountable. But we also know that with the right support, hope can be rekindled,
                    and healing is possible. We are committed to being that beacon of hope, offering resources, stories, and a community that lifts you up when the weight of the world feels too heavy.
                </p>
                <p>
                    At Remember Me, we’re more than just a resource. we’re a lifeline, a community, and a reminder that your mental health matters, and so do you. Whether you’re seeking information, a place
                    to share your story, or simply reassurance that someone cares, we’re here for you.
                </p>
                <p>
                    No matter how dark the days may seem, there’s a light within you that never goes out.
                    Together, we can find the way forward.
                </p>

                <h2 className="text-xl font-semibold animate-pulse">A Survivor’s Story..</h2>
                <p>
                    I am a survivor of the streets and all kinds of addictions.. crack cocaine, meth (ice), chain smoking, you name it. All these struggles led me to suffer from mental health issues.
                    This platform was created to help those facing similar challenges.
                </p>
                <p>
                    I battled addiction for over a decade. Being intellectually smart, no one could detect my struggles with drugs, but it led to severe depression. For years, I fought with depression,
                    often feeling like I had no one to talk to. My family was far away, and I almost lost myself in the process. But somehow, I’m glad I made it through.
                </p>
                <p>
                    I believe I survived to share my story and inspire others. It’s so easy to get drugs on the streets these days. When I asked for help, people often
                    offered me more drugs instead of the support I truly needed.
                </p>
                <p>
                    With this platform, I aim to fully share my story and offer hope. If you’re reading this, just know that there is hope out there for you, too.
                </p>
            </div>

            <div className="flex justify-center flex-col">
              <img src={photo1} alt="img" className=" mb-2 flex justify-center rounded-md md:w-[600px]" />
              <i className="text-center text-white text-sm">Oguzi Michael Ogar</i>
              <i className="text-center text-white text-sm mb-4">Author</i>
            </div>
        </div>

    )
}

export default About;