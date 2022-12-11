const Navbar = () => {
    return ( 
        <div className="w-screen md:flex flex-row justify-between py-1 px-6 h-[72px] hidden ">
            <div className="my-auto">
                <img src="logo.png" alt="logo"  className="w-[162px] my-0 p-0"/>
            </div>
            <div className="relative flex items-center rounded-full">
                <img src="searchIcon.svg" alt="search" className="mx-2 relative top-0 left-9"/>
                <input type="text" className=" w-[360px] h-[42px] pl-9 text-base font-normal bg-gray-300 border-none outline-none rounded-full placeholder-gray-600 text-[14px]" placeholder="Search for your favorite groups in ATG"/>
            </div>
            <div className="flex my-auto gap-1 text-black">
                <h3>Create Account </h3>
                <h3 className="font-bold text-primary">Its Free!</h3>
                <span><img src="down.png" alt=">" /></span>
            </div>
        </div>
     );
}
 
export default Navbar;