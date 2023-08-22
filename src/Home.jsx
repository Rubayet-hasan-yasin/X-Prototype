import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const Home = () => {
    const [toggle, setToggle] = useState(false);
    const [dataField, setDataField] = useState(false);
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({})


    return (
        <div className="">
            <Navbar />


            { data.length ?
            null
            :
                <div className="h-fit p-10 bg-[#161616] grid items-center">
                    <Form
                        toggle={toggle}
                        setToggle={setToggle}
                        setDataField={setDataField}
                        dataField={dataField}
                        setData={setData}
                        setFormData={setFormData}
                    />
                </div>
            }

            {
                data.length && 
                <div className="h-screen p-10 bg-[#161616] grid items-center">

                    <Table 
                    formData={formData}
                    data={data}
                    />
                </div>
            }

        </div>
    );
};

export default Home;