
const Navbar = () => {
    return (
        <nav className="h-16 w-full bg-slate-400 flex justify-between items-center">
            <div className="ml-8">
                <h1 className="text-2xl text-white">Vinoth Kumar N</h1>
            </div>
            <div className="mr-8">
                <ul className="flex">
                    <li className="mr-4">
                        <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="mr-4">
                        <a href="/Projects" className="text-white">About</a>
                    </li>
                    <li className="mr-4">
                        <a href="#/Contact" className="text-white">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;