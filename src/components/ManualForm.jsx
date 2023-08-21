
const ManualForm = () => {
    return (
            <form className="py-7">
                <div className="">
                    <label htmlFor="" className="block text-xl font-semibold">X</label>
                    <div className="flex gap-5">
                        <input type="text" name="" id="" placeholder="min" className="border-2 rounded outline-none py-2 px-5 w-full focus:ring-2 ring-gray-400" />
                        <input type="text" name="" id="" placeholder="min" className="border-2 rounded outline-none py-2 px-5 w-full focus:ring-2 ring-gray-400" />
                    </div>
                </div>

                <div className="my-5">
                    <label htmlFor="" className="block text-xl font-semibold">Y</label>
                    <div className="flex gap-5">
                        <input type="text" name="" id="" placeholder="min" className="border-2 rounded outline-none py-2 px-5 w-full focus:ring-2 ring-gray-400" />
                        <input type="text" name="" id="" placeholder="min" className="border-2 rounded outline-none py-2 px-5 w-full focus:ring-2 ring-gray-400" />
                    </div>
                </div>


                <div className="">
                    <label htmlFor="" className="block text-xl font-semibold">Z</label>
                    <div className="flex gap-5">
                        <input type="text" name="" id="" placeholder="min" className="border-2 rounded outline-none py-2 px-5 w-full focus:ring-2 ring-gray-400" />
                        <input type="text" name="" id="" placeholder="min" className="border-2 rounded outline-none py-2 px-5 w-full focus:ring-2 ring-gray-400" />
                    </div>
                </div>
            </form>

    );
};

export default ManualForm;