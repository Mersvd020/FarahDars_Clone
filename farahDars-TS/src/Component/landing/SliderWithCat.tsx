import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {useState} from "react"

//course Card
import CourseCard from "../product_Card/courseCard"
import type { courseList } from "../product_Card/courseCard";




const SliderWithCat = ()=>{
 
   const sliderTab :string[] =  ["همه","برنامه نویسی","هوش مصنوعی"]
   
   const [borderActive,setBorderActive] = useState<number>(0);


   const courseList :courseList[] = [
   {id:1,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:2,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:3,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:4,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:5,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:6,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:7,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:8,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:9,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
   {id:10,title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" }
   ]

   return (
      <div className="border w-full h-[506.42px]">

         <div className="border w-full h-[20%] flex flex-row  justify-between">

            <div className=" w-[20%] h-[60%] text-[25px] whitespace-nowrap flex items-center">
              آموزش های پر مخاطب
            </div>
            <div className=" w-[120px] h-[60%] flex flex-row justify-end gap-2 items-center   ">
                <button className=" w-[45px] h-[75%] bg-[gray]/30 rounded-[10px]"><IoIosArrowForward className="text-[gray] hover:text-[black] transition hover:pointer p-3 w-full h-[90%]"/></button>
                <button className=" w-[45px] h-[75%] bg-[gray]/30 rounded-[10px]"><IoIosArrowBack className="text-[gray] hover:text-[black] transition hover:pointer p-3 w-full h-[90%]" /></button>
            </div>

         </div>

         <div className=" flex flex-row gap-5 w-full h-[8%] border-b border-[gray] px-3">
            {sliderTab.map((label,index)=>(
             <button key={index}
              onClick={()=>setBorderActive(index)} 
              className={`text-[15px] border-[blue]/60 hover:bg-[gray]/20 h-full transition-colors duration-300
                ${borderActive === index ?
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
         <div className="Slider border w-full h-[68%] overflow-hidden overflow-x-auto">
           <div className="gal w-[3000px] h-full border border-[blue]
            flex flex-row items-center gap-2">
               {courseList.map((card)=>(
                  <CourseCard
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