
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';
import {proImg} from '../assets/img/profile.jpg';

const Home = () => {
    return (
        <>  
            <div className="">

            </div>
            <Navbar />
            <div className="container h-4/6 w-full flex items-center justify-center">
                <div className="content-container">
                    <h1 className="text-2xl">Hi! I am Vinoth Kumar N</h1>
                    <p className="text-lg">I am a Full Stack Developer</p>
                </div>
                <div className="img-container">
                    <img src="{proImg}" alt="profileImg" />
                </div>
            </div>
        </>
    )
}

export default Home;