import { BrowserRouter, Routes,Route } from 'react-router-dom';
import WebLayout from './Layout/WebLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />} >
                        <Route path='/' element={<Home />} ></Route>
                        <Route path='/Projects' element={<Projects />} ></Route>
                        <Route path='/Contact' element={<Contact />} ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;



{/* <div className="h-screen w-screen flex justify-center items-center bg-slate-500">
                <div className="h-3/8 w-[30%] bg-white p-5 rounded-lg dark:shadow-2xl">
                    <h2 className="text-center font-bold text-3xl">Register</h2>
                    <form action="post" className="p-5 flex flex-col gap-4">
                        <input type="text"  placeholder="Username" className="p-3 bg-[#efebeb] w-full font-bold border-solid focus:outline-none border-b-2 focus:border-purple-300"/>
                        <input type="email" placeholder="Email" className="p-3 bg-[#efebeb] w-full font-bold focus:outline-none border-b-2 focus:border-purple-300" />
                        <input type="password" placeholder="Password" className="p-3 bg-[#efebeb] w-full font-bold focus:outline-none border-b-2 focus:border-purple-300" />
                        <button className=" w-full bg-gray-500 mt-8 h-12 rounded-md active:border-none hover:bg-slate-400 text-cyan-50 shadow-md">Submit</button>
                    </form>
                </div>
            </div>
            <div className="mt-10">
                <Arrobj data = {arr}/>
            </div> */}