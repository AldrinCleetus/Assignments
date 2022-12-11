import OptionsButton from "./OptionsButton";

const MobileTabs = () => {
    return ( 
         <div className="md:hidden ">
             <div className=" md:hidden flex gap-4 justify-between mx-6 my-4">
                <button className="font-bold text-black">All Posts(368)</button>
                <OptionsButton optionTitle="Filter:All"></OptionsButton>
            </div>
        </div>
     );
}
 
export default MobileTabs;