"use client"
import { useState } from "react";
import Image from 'next/image';

const TOOGLE_OPTIONS = {
    LEADS_GENERATION: 'Lead Generation',
    PERSONAL_BRANDING: 'Personal Branding',
    CONTENT_CREATION: 'Content creation',
}

export default function UseCases() {
    const [toggleOption, setToggleOption] = useState(TOOGLE_OPTIONS.LEADS_GENERATION);

    return (
        <div id="usecases" className="h-[50vh] py-8 px-4 md:px-16 min-h-[100vh] text-center">
            <h1 className="font-bold text-4xl md:text-[50px] pb-4">Get running with ELIGIUS</h1>
            <p className="font-semibold text-[20px] dark:text-[#7A7A7A]">Here are the different usecases</p>
            <div className="md:flex md:justify-center w-full items-center pt-4 md:mt-8">
                <div className="md:mx-8 flex-row md:w-[30%] justify-center md:flex-col flex text-center md:text-left">
                    <button className="text-center md:text-left my-4 mx-2 md:mx-0" onClick={() => setToggleOption(TOOGLE_OPTIONS.LEADS_GENERATION)}>
                        <h4 className={toggleOption === TOOGLE_OPTIONS.LEADS_GENERATION ? "md:text-[30px] rounded-md font-semibold text-[#8357C6]" : "md:text-[30px] font-semibold text-black"}>Lead Generation</h4>
                    </button>
                    <button className="text-center md:text-left my-4 mx-2 md:mx-0" onClick={() => setToggleOption(TOOGLE_OPTIONS.PERSONAL_BRANDING)}>
                        <h4 className={toggleOption === TOOGLE_OPTIONS.PERSONAL_BRANDING ? "md:text-[30px] rounded-md font-semibold text-[#8357C6]" : "md:text-[30px] font-semibold text-black"}>Personal branding</h4>
                    </button>
                    <button className="text-center md:text-left my-4 mx-2 md:mx-0" onClick={() => setToggleOption(TOOGLE_OPTIONS.CONTENT_CREATION)}>
                        <h4 className={toggleOption === TOOGLE_OPTIONS.CONTENT_CREATION ? "md:text-[30px] rounded-md font-semibold text-[#8357C6]" : "md:text-[30px] font-semibold text-black"}>Content creation</h4>
                    </button>
                </div>

                <div className="md:mx-8 md:w-[70%] my-4 md:my-0 rounded-md">
                    {toggleOption === TOOGLE_OPTIONS.LEADS_GENERATION && <div className="h-[400px] w-full md:w-[700px] bg-red-800 rounded-md"></div>}
                    {toggleOption === TOOGLE_OPTIONS.PERSONAL_BRANDING && <div className="h-[400px] w-full md:w-[700px] bg-green-800 rounded-md"></div>}
                    {toggleOption === TOOGLE_OPTIONS.CONTENT_CREATION && <div className="h-[400px] w-full md:w-[700px] bg-blue-800 rounded-md"></div>}
                </div>
            </div>
        </div>
    );
}
