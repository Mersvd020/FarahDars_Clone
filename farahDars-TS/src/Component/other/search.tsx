import {useState} from "react"
import {CiSearch} from "react-icons/ci"

type placeHolder = {
    placeHolder: string 
}

const Search = ({placeHolder}:placeHolder)=> {
 
    const [text,setText] = useState<string>("");

    const searchHandler = ():void=>{
        setText("")
    }
  
    return(
        <>
         <input
           type="text"
           value={text}
           onChange={(e)=>setText(e.target.value)}
           placeholder={placeHolder}
           dir="rtl"
           className="h-full text-[black] max-md:text-[12px] outline-0 w-[90%] indent-[10px]"
           />
           <button onClick={searchHandler} className="h-full max-md:w-[20%] w-[10%]  ">
            <CiSearch className=" w-[50%] h-[60%]   m-auto"/>
            </button>
        </>
    ) 
   
}
export default Search