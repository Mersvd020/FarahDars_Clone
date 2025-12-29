import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {useState,useRef} from "react"

//course Card
import CourseCard from "../product_Card/courseCard"
import type { courseDataList } from "../../Page/landing/landingPage";
type courseListProps = {
   courseList:courseDataList[];
}
type tab = {
   tabIndex:number,
   technology:string
}

const SliderWithCat = ({courseList}:courseListProps)=>{
 
  //// slider tab 
   const sliderTab :string[] =  ["همه","برنامه نویسی","هوش مصنوعی"];

   const tabHandler =(index:number,label:string)=>{
      const tech = label === "همه" ? "": label;   
    setTab({...tab,tabIndex : index ,technology:tech});
   }
   
   const [tab,setTab] = useState<tab>({
      tabIndex:0,
      technology:""
   });
   // console.log("tab",tab);
   const filteredCourse = courseList.filter((cr)=>{

       if(tab.technology && !cr.technology.includes(tab.technology)) return false

       return true
   })

  ///// slider left and right handler 
   const galPosition = useRef<HTMLDivElement>(null);
    let galpos :number = 0;
    let perMove:number = 21;
    let courseTotal:number = filteredCourse.length;
    let sliderLimit:number = courseTotal*21 - 64;
    
   const sliderLeftHandler = ():void=>{
       if(!galPosition.current) return
       if( galpos > -sliderLimit ){
         galpos = galpos -perMove;
       }
       else if(galpos = -sliderLimit){
         galpos = 0;
       }
       galPosition.current.style.right = `${galpos}%`
   }

   const sliderRightHandler = ():void=>{
       if(!galPosition.current) return
       if( 0 <= galpos){
         galpos = -sliderLimit;
       }
       else if(galpos > -(sliderLimit + 4)){
         galpos = galpos + perMove;
       }
       galPosition.current.style.right = `${galpos}%`
   }


   return (
      <div className=" w-full h-[506.42px]">

         <div className=" w-full h-[20%] flex flex-row  justify-between">

            <div className=" w-[20%] h-[60%] text-[25px] whitespace-nowrap flex items-center">
              آموزش های پر مخاطب
            </div>
            <div className=" w-[120px] h-[60%] flex flex-row justify-end gap-2 items-center   ">
                <button 
                 id="right"
                 onClick={sliderRightHandler}
                className=" w-[45px] h-[75%] bg-[gray]/30 rounded-[10px]">
                  <IoIosArrowForward className="text-[gray] hover:text-[black] transition hover:cursor-pointer p-3 w-full h-[90%]"/>
                  </button>
                <button 
                id="left"
                 onClick={sliderLeftHandler}
                className=" w-[45px] h-[75%] bg-[gray]/30 rounded-[10px]">
                  <IoIosArrowBack className="text-[gray] hover:text-[black] transition hover:cursor-pointer p-3 w-full h-[90%]" />
                  </button>
            </div>

         </div>

         <div className=" flex flex-row gap-5 w-full h-[8%] border-b border-[gray] px-3">
            {sliderTab.map((label,index)=>(
             <button key={index}
              onClick={()=>tabHandler(index,label)} 
              className={`text-[15px] border-[blue]/60 hover:bg-[gray]/20 h-full transition-colors duration-300
                ${tab.tabIndex === index ?
                  "border-b-2 text-[blue]"
                  :
                  ""
                 }
              `}>
               {label}
               </button>
            ))}
           
         </div>

         {/*gal*/}         
         <div className="Slider w-full h-[68%] overflow-hidden max-lg:overflow-x-scroll hide-scrollbar">
           <div ref={galPosition}  className="gal w-[3000px] h-full
            flex flex-row items-center gap-5 p-1 pt-5 transition-all duration-500 ease-in-out
            relative right-[0%] ">
               {filteredCourse.map((card)=>(
                  <CourseCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    teacherName={card.teacherName}
                    courseTime={card.courseTime}
                    price={card.price}
                    disCount={card.disCount}
                    ImageAddress={card.ImageAddress}
                  />
               ))}
              
           <div className="border-1 border-[gray]/50 bg-[gray]/20  w-[7%] h-full flex flex-col rounded-[12px] items-center">
                     مشاهده همه
           </div>

           </div> 


          
         </div>

      </div>
   )    
} 

export default SliderWithCat