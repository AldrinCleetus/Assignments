const JoinGroupButton = () => {
    return ( 
        <div className="px-2 h-[36px] flex flex-row justify-center align-middle gap-2 bg-primary text-white text-[15px] rounded-md">
            <span className=" my-auto"><img src="group.png" alt=">" /></span>
            <button className="my-auto font-semibold ">Join Group</button>
        </div>
     );
}
 
export default JoinGroupButton;