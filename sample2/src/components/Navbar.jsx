import { useState } from 'react';
import logImg from '../assets/img/LogIcon.png';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            {
                visible ? (
                    <div className="h-screen w-screen absolute top-0 left-0 bg-white flex justify-center items-center z-50 " >
                        <div className="h-3/6 w-[30%] flex flex-col justify-center items-center bg-[#f8f8f8] rounded-md shadow-2xl shadow-purple-600">
                            <div className=" w-full flex justify-between">
                                <div className=" w-5/6 h-[1rem] text-center ml-[2rem]">
                                    <h3 className="font-monos text-black text-3xl font-bold">Login</h3>
                                </div>
                                <div className="w-1/6">
                                    <svg onClick={() => setVisible(!visible)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </div>
                            </div>
                            <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
                                <input type="email" id="email" placeholder="Email" className="p-3 bg-[#f0eded] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
                                <input type="password" id="password" placeholder="Password" className="p-3 bg-[#f0eded] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
                                <button type="submit" className="w-full bg-purple-600 text-white p-3">Login</button>
                            </form>
                        </div>
                    </div>

                ) : (
                    <nav className="h-16 w-full bg-[#f8f8f8] flex justify-between items-center">
                        <div className="ml-8">
                            <h1 className="text-3xl text-black font-bold">Portfolio</h1>
                        </div>
                        <div className="mr-20 flex ">
                            <ul className="flex">
                                <li className="mr-8 hover:bg-[#ebe6e6] px-2 rounded-md">
                                    <a href="/" className="text-xl text-black font-semibold ">Home</a>
                                </li>
                                <li className="mr-8 hover:bg-[#ebe6e6] px-2 rounded-md">
                                    <a href="/Projects" className="text-xl text-black font-semibold">Projects</a>
                                </li>
                                <li className="mr-8 hover:bg-[#ebe6e6] px-2 rounded-md">
                                    <a href="/Contact" className="text-xl text-black font-semibold">Contact</a>
                                </li>
                            </ul>
                            <div className='' onClick={() => setVisible(!visible)}>
                                <img className='w-[2rem] ml-[2rem] rounded-2xl ' src={logImg} alt="loginProfile" />
                            </div>
                        </div>

                    </nav>
                )
            }
        </>
    )
}
export default Navbar;