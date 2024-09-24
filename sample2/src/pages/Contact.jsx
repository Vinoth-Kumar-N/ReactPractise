import React, { useState } from "react";
import { CircleX } from "lucide-react";


const Contact = () => {
    return (
        <>
            <div className="h-[90vh] w-screen bg-black/15 flex justify-center items-center">
                <div className=" h-[55%] w-[30%] bg-red flex flex-col  bg-white  shadow-lg ">
                    <div className="w-full h-[15%] flex flex-row justify-between px-10 items-center border-2 text-purple-500 bg-white text-xl font-bold shadow-sm">

                        <div className="">Email Me</div>
                        <div className="">
                            <CircleX />
                        </div>

                    </div>

                    <div className="w-full h-[85%] flex flex-row justify-center items-center">
                        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
                            <input type="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" placeholder="Email" />
                            <textarea name="messge" id="Comment" placeholder="Comment" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3">

                            </textarea>
                            <button type="submit" className="text-white bg-slate-500 from-green-500 via-red-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-purple-100 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4" >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
