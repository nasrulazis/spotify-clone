const LeftNavbar = () => {
    return (
        <nav className="flex-col justify-start items-center w-[500px] pr-2  bg-black">
            <div className="w-[280px]">
            <div className="bg-[#191414] p-6 rounded-2xl mb-2 relative">
                <h1 className="text-white font-bold text-base">Home</h1>
            </div>
            <div className="bg-[#191414] p-6 rounded-2xl h-screen relative">
                <h1 className="text-white font-bold text-base">My Library</h1>
            </div>
            </div>
        </nav>
    );
};

export default LeftNavbar;