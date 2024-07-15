import About from "./About";
import Banner from "./Banner";
import Servicrs from "./Servicrs";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="py-10">
                <About />
            </div>
            <div>
                <Servicrs />
            </div>
        </div>
    );
};

export default Home;