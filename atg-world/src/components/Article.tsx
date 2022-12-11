interface Article{
    type: string,
    title: string,
    description: string,
    user:{
        userName: string,
        profile: string
    }
    views: number,
}


const Article = (props:Article) => {
    return ( 
        <div className="xl:mx-60  md:mx-16 md:mt-4 flex flex-row lg:justify-between sm:justify-between md:gap-5 ">
            <div className="  flex flex-col gap-2 xl:text-[19px]">
            <img src="trees.jpg" alt="trees"  className="h-[220px] w-full object-cover object-middle"/>
            <p className="text-black mt-2 mx-3 font-semibold ">{props.type}</p>
            <div className="flex justify-between mx-3">
                <h2 className="font-bold text-black w-5/6">{props.title}</h2>
                <span><img src="dots.png" alt="" /></span>
            </div>
            <p className="mx-3 text-gray-600 overflow-clip h-6">{props.description}</p>
            <div className="flex justify-between mx-4 gap-2 mt-2 mb-2">
                <div className="flex gap-2 ">
                    <div className="w-[37px] my-auto">
                        <img src={props.user.profile} alt="" className="rounded-full"/>
                    </div>
                    <div className="my-auto text-black">
                        <h4 className="font-bold">{props.user.userName}</h4>
                        <p>{props.views}k views</p>
                    </div>
                </div>
                <div className="px-2 h-[36px] flex flex-row justify-center align-middle gap-2 bg-gray-300 text-black text-[15px] rounded-md">
                    <span className="my-auto"><img src="share.png" alt=">" /></span>
                    <button className="font-semibold">Share</button>
                </div>
            </div>
        </div>
        <div className="text-black sm:flex flex-col gap-2 w-[243px] hidden">
            <div className="px-2 h-[36px] flex flex-row justify-between align-middle gap-2 border-b border-opacity-30 border-black  text-black text-[15px]">
                <button className="flex my-auto">
                    <span className="my-auto"><img src="location.png" alt=">" /></span>
                    <p className="font-semibold ">Noida, India</p>
                </button>
                <span className="my-auto"><img src="edit.png" alt=">" /></span>
            </div>

            <div className="flex ">
                <span className="mt-1 w-[50px]"><img src="error.png" alt=">" className="w-[13px] h-[13px]"/></span>
                <p>Your Location will help us serve better and extend a personalised experience</p>
            </div>

        </div>
       
        </div>
     );
}
 
export default Article;