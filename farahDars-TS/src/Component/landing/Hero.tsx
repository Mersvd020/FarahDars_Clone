import Search from "../other/search"


const Hero = ()=>{
    return(
        <div className=" w-full h-[458.5px] flex flex-row justify-between 
        ">
   
            <div className="w-[45%] h-full flex flex-col justify-end   text-[gray]/100">

             <article className="max-2xl:h-[55%] max-md:h-[45%] h-[40%] flex flex-col gap-3">
               <p className="max-lg:text-[35px] max-md:text-[25px] text-[38px]  text-[black] font-bold ">با هزاران <span className="text-[blue]/80">آموزش</span>  کاربردی فرادرس،</p>
               <p className="max-lg:text-[25px] max-md:text-[20px] text-[30px] whitespace-nowrap ">همین امروز شروع کن،</p>
               <p className="max-lg:text-[20px] max-md:text-[15px] text-[25px] whitespace-nowrap">یاد بگیر و آینده رو بساز.</p>
             </article>

             <div className="h-[35%] w-full items-center"> 
               <div dir="rtl" className={` w-[93%] h-[60px]  shadow-gray-400 shadow-sm  bg-white  rounded-[8px] flex flex-row items-center`}>
              <Search  placeHolder="به دنبال یادگیری چه هستی؟"/>
              </div>
              </div>

            </div>

             <picture className="w-[50%] h-full flex flex-col items-center justify-center">
               <img src="https://faradars.org/wp-content/uploads/2024/10/28/hero-illustration.svg"
                className="w-[95%] h-full"
                 />
            </picture>

            
        </div>
    )
}
export default Hero