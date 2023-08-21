

const ToggleButton = ({toggle, setToggle}) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">

            <input type="checkbox" value="" className="sr-only peer" defaultChecked={toggle} onChange={()=>setToggle(!toggle)}/>

            <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none">Manually insert</span>
        </label>
    );
};

export default ToggleButton;