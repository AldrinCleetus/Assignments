const Hero = () => {
    return ( 
    <div className="md:pl-44 md:pb-20 w-screen pb-10 pl-4 md:h-[440px] h-[236px] bg-cover bg-center flex md:gap-3 gap-0 flex-col justify-end dark-tint" >
        <div className="md:hidden absolute top-0 left-0 flex justify-between w-full px-6 py-5">
            <button className=""><img src="back.png" alt="back" /></button>
            <button className=" border rounded-sm w-20 text-[12px]">Join Group</button>
        </div>
        <h1 className="font-bold md:text-[36px] text-[17px] z-10">Computer Engineering</h1>
        <h3 className="md:text-[18px] text-[12px] z-10">142,765 Computer Engineers follow this</h3>
    </div>
     );
}
 
export default Hero;