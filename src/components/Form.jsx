import File_input from "./File_input";
import ManualForm from "./ManualForm";
import ToggleButton from "./ToggleButton";

const Form = ({ toggle, setToggle, setDataField, dataField, setData, setFormData }) => {

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const projectName = form.projectName.value;
        const projectDescription = form.projectDescription.value;
        const client = form.client.value;
        const contractor = form.contractor.value;


        const maxX = form.maxX?.value;
        const minX = form.minX?.value;
        const maxY = form.maxY?.value;
        const minY = form.minY?.value;
        const maxZ = form.maxZ?.value;
        const minZ = form.minZ?.value;

        const manualData = [
            {KP: '0', X: maxX, Y: maxY, Z: maxZ},
            {KP: '1', X: minX, Y: minY, Z: minZ}
        ];



        if(maxX && maxY && maxZ && minZ && minX && minY){
            setData(manualData)
        }

        console.log(maxX, maxY, maxZ, minX, minY, minZ);

        if (projectName && projectDescription && client && contractor) {
            const userinput = {projectName, projectDescription, client, contractor}
            setFormData(userinput);
            setDataField(true);
        }
        else {
            setDataField(false);
        }

    }


    return (
        <div className="relative md:w-1/2 py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-cyan-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-3xl font-bold mb-10 text-center">XYZ Engine</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form onSubmit={handleFormSubmit}>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="projectName" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Name</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="projectDescription" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Description</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="client" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Client</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="contractor" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contractor</label>
                            </div>


                            {/* CSV file input and toggle button  */}

                            {
                                dataField &&
                                <div>
                                {/* CSV file input  */}
                                <File_input 
                                setData={setData}
                                />

                                {/* Manually insert data  */}
                                {/* Toggle Switch */}
                                <ToggleButton
                                    toggle={toggle}
                                    setToggle={setToggle}
                                />
                            </div>
                            }

                            {/* Manual form  */}
                            {
                                toggle &&
                                <ManualForm />
                            }





                            <div>
                                <button className="bg-blue-400 w-full py-2 rounded-lg">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Form;