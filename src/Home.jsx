import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const Home = () => {
    const [toggle, setToggle] = useState(false);

    console.log()
    return (
        <div className="">
            <Navbar />


            <div className="h-fit p-10 bg-[#161616] grid items-center">
                <Form 
                toggle={toggle}
                setToggle={setToggle}
                />
            </div>


            
        </div>
    );
};

export default Home;