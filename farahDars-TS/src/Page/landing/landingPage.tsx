import Hero from "./Hero"
import LandingReport from "./LandingReport"
import SliderWithCat from "../../Component/landing/SliderWithCat"

import type { courseList } from "../../Component/product_Card/courseCard";
export type courseDataList = courseList &{
    technology:string[],
    courseLevel:string
}

const landingPage = ()=>{

   // course data
     const courseList :courseDataList[] = [
     {id:1,technology:["هوش مصنوعی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:2,technology:["هوش مصنوعی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:100,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:3,technology:["هوش مصنوعی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:4,technology:["برنامه نویسی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:5,technology:["برنامه نویسی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:6,technology:["هوش مصنوعی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:90,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:7,technology:["هوش مصنوعی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:50,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:8,technology:["هوش مصنوعی","برنامه نویسی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:9,technology:["هوش مصنوعی","برنامه نویسی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:10,technology:["هوش مصنوعی","برنامه نویسی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" }
     ]

    return (
        <div className="  w-full bg-gradient-to-b from-sky-200 via-gray-200 to-white ">
          <div className=" min-2xl:container min-2xl:mx-auto flex flex-col place-items-center gap-5 ">
          <section className="w-full flex flex-col items-center ">
            <Hero/>
          </section>
          <LandingReport/>
           <div className="w-[80%]">
          <SliderWithCat courseList={courseList}/>
           </div>
           <div className="w-[80%]">
          <SliderWithCat courseList={courseList} />
           </div>

          </div>
        </div>
    )
}

export default landingPage