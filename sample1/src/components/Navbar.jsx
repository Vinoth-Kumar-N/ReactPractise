
const Navbar = () => {
    return (
        <nav className="h-16 w-full bg-[#f8f8f8] flex justify-between items-center">
            <div className="ml-8">
                <h1 className="text-3xl text-black font-bold">Portfolio</h1>
            </div>
            <div className="mr-20">
                <ul className="flex">
                    <li className="mr-8">
                        <a href="/" className="text-xl text-black font-semibold">Home</a>
                    </li>
                    <li className="mr-8">
                        <a href="/Projects" className="text-xl text-black font-semibold">Projects</a>
                    </li>
                    <li className="mr-8">
                        <a href="/Contact" className="text-xl text-black font-semibold">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;