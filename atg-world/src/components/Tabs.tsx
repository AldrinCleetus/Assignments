import JoinGroupButton from "./JoinGroupButton";
import OptionsButton from "./OptionsButton";

const Tabs = () => {
    return ( 
        <div className="hidden mt-8 h-12 sm:mx-22 md:text-[12px] md:mx-16 md:flex justify-between sm:text-[6px] xl:mx-60 lg:mx-44  bottom-border text-gray-400 xl:text-[16px]">
            <div className="flex gap-4" >
                <button className="border-b-2 border-black text-black">All Posts(32)</button>
                <button>Articles</button>
                <button>Event</button>
                <button>Education</button>
                <button>Job</button>
            </div>
            <div className="flex gap-4">
                <OptionsButton optionTitle="Write a Post"></OptionsButton>
                <JoinGroupButton></JoinGroupButton>
            </div>
        </div>
     );
}
 
export default Tabs;