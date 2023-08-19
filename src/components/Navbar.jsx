
const Navbar = () => {
    return (
        <nav
            className="w-full bg-neutral-800 shadow-lg py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="mx-2">
                    <h6 className="text-slate-300 text-4xl font-bold">X <span className="text-slate-500">Prototype</span></h6>
                </div>
               
            </div>
        </nav>
    );
};

export default Navbar;