interface Options {
    optionTitle: string
}

const NewPostButton = (props:Options) => {



    return ( 
        <div className="px-2 h-[36px] flex flex-row justify-center align-middle gap-2 bg-gray-300 text-black text-[15px] rounded-md">
            <button className="font-semibold">{props.optionTitle}</button>
            <span className="my-auto"><img src="down.png" alt=">" /></span>
        </div>
     );
}
 
export default NewPostButton;