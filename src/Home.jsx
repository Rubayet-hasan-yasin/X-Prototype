import Form from "./components/Form";
import Navbar from "./components/Navbar";

const Home = () => {
    return (
        <div className="">
            <Navbar />


            <div className="h-fit p-10 bg-[#161616] grid items-center">
                <Form/>
            </div>


            
        </div>
    );
};

export default Home;