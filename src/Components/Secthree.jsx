import React from "react"
import '@fontsource/luckiest-guy';

const Secthree = () => {
    return (
        <div className="px-4 md:px-20 py-20 text-gray-800 hover:text-black duration-200 border-t border-gray-300">
            <div className="flex gap-16 flex-col md:flex-row ">
                <div className="text-7xl font-bold font-luckiest">01</div>
                <div className="text-4xl flex items-center w-60 font-luckiest">Stories of Hope</div>
                <div className="text-sm w-80 md:w-[600px]">
                    In the midst of struggle, it can be hard to see the light at the
                    end of the tunnel. But you are not alone others have walked this
                    path and come out stronger on the other side. Read real stories
                    from individuals who have faced mental health challenges and
                    emerged with renewed hope. These stories are a testament
                    to the strength of the human spirit and a reminder that healing is possible.
                </div>
            </div>
        </div>
    )
}

export default Secthree;