import { BiCategory } from "react-icons/bi";

const categoryList = ()=>{
    return (
        <button 
         className=" flex flex-row items-center justify-center gap-2  text-[15px] whitespace-nowrap hover:cursor-pointer h-[90%] w-[20%]"
        >
        <BiCategory className="max-lg:text-[30px] " /> <p className=" max-lg:hidden inline"> دسته بندی ها</p>
        </button>
    )
}

export default categoryList