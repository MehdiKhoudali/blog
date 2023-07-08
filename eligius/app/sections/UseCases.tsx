"use client"
import { useState } from "react";
import Image from 'next/image';

const TOOGLE_OPTIONS = {
    PROVIDE_INSTRUCTIONS: 'Provide instructions',
    REPORT_BUGS: 'Report bugs',
    SHARE_IDEAS: 'Share ideas',
    DISCUSS_DESIGN: 'Discuss design',
}

export default function UseCases() {
    const [toggleOption, setToggleOption] = useState(TOOGLE_OPTIONS.PROVIDE_INSTRUCTIONS);

    return (
        <div id="usecases" className="px-4 md:px-16 min-h-[100vh] text-center">
            <h1 className="font-bold text-4xl md:text-[50px] pb-4">Get running with ELIGIUS</h1>
            <p className="font-semibold text-[20px] dark:text-[#7A7A7A]">Here are the different usecases</p>
            <div className="md:flex md:justify-center w-full items-center pt-4 md:mt-8">
                <div className="md:mx-8 flex-row md:w-[30%] justify-center md:flex-col flex text-center md:text-left">
                    <button className="text-center md:text-left my-4 mx-2 md:mx-0" onClick={() => setToggleOption(TOOGLE_OPTIONS.PROVIDE_INSTRUCTIONS)}>
                        <h4 className={toggleOption === TOOGLE_OPTIONS.PROVIDE_INSTRUCTIONS ? "md:text-[30px] rounded-md font-semibold text-gray-600 text-transparent bg-clip-text bg-gradient-to-r from-[#AC6AFF] to-[#2859FF]" : "md:text-[30px] font-semibold text-black"}>Provide instructions</h4>
                    </button>
                    <button className="text-center md:text-left my-4 mx-2 md:mx-0" onClick={() => setToggleOption(TOOGLE_OPTIONS.REPORT_BUGS)}>
                        <h4 className={toggleOption === TOOGLE_OPTIONS.REPORT_BUGS ? "md:text-[30px] rounded-md font-semibold text-gray-600 text-transparent bg-clip-text bg-gradient-to-r from-[#AC6AFF] to-[#2859FF]" : "md:text-[30px] font-semibold text-black"}>Report bugs</h4>
                    </button>
                    <button className="text-center md:text-left my-4 mx-2 md:mx-0" onClick={() => setToggleOption(TOOGLE_OPTIONS.SHARE_IDEAS)}>
                        <h4 className={toggleOption === TOOGLE_OPTIONS.SHARE_IDEAS ? "md:text-[30px] rounded-md font-semibold text-gray-600 text-transparent bg-clip-text bg-gradient-to-r from-[#AC6AFF] to-[#2859FF]" : "md:text-[30px] font-semibold text-black"}>Share ideas</h4>
                    </button>
                    <button className="text-center md:text-left my-4 mx-2 md:mx-0" onClick={() => setToggleOption(TOOGLE_OPTIONS.DISCUSS_DESIGN)}>
                        <h4 className={toggleOption === TOOGLE_OPTIONS.DISCUSS_DESIGN ? "md:text-[30px] rounded-md font-semibold text-gray-600 text-transparent bg-clip-text bg-gradient-to-r from-[#AC6AFF] to-[#2859FF]" : "md:text-[30px] font-semibold text-black"}>Discuss design</h4>
                    </button>
                </div>

                <div className="md:mx-8 md:w-[70%] my-4 md:my-0 rounded-md">
                    {toggleOption === TOOGLE_OPTIONS.PROVIDE_INSTRUCTIONS && <div className="h-[400px] w-full md:w-[700px] bg-red-800 rounded-md"></div>}
                    {toggleOption === TOOGLE_OPTIONS.REPORT_BUGS && <div className="h-[400px] w-full md:w-[700px] bg-green-800 rounded-md"></div>}
                    {toggleOption === TOOGLE_OPTIONS.SHARE_IDEAS && <div className="h-[400px] w-full md:w-[700px] bg-blue-800 rounded-md"></div>}
                    {toggleOption === TOOGLE_OPTIONS.DISCUSS_DESIGN && <div className="h-[400px] w-full md:w-[700px] bg-gray-800 rounded-md"></div>}
                </div>
            </div>
        </div>
    );
}
