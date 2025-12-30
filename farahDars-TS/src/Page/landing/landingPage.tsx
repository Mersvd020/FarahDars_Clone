import Hero from "../../Component/landing/Hero"
import LandingReport from "../../Component/landing/LandingReport"
import Board from "../../Component/landing/splitHero"
import SliderWithCat from "../../Component/landing/SliderWithCat"
import Leaderboard from "../../Component/landing/leaderBoard"


import type { courseList } from "../../Component/product_Card/courseCard";
export type courseDataList = courseList &{
    technology:string[],
    courseLevel:string
}

const landingPage = ()=>{

   // course data
     const courseList :courseDataList[] = [
     {id:1,technology:["هوش مصنوعی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:80,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Fmvrma92021.svg&w=1920&q=75" },
     {id:2,technology:["هوش مصنوعی"],courseLevel:"متوسط",title:"آموزش برنامه نویسی Matlab",teacherName:"سید مصطفی کلامی هریس",courseTime:9,price:790000,disCount:100,ImageAddress:"https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2024%2F04%2F17%2Ffvpub340.svg&w=1920&q=75" },
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
        <div className="  w-full">
          
          <div className="flex flex-col place-items-center gap-5 min-2xl:container min-2xl:mx-auto ">
          <section className="w-full flex flex-col items-center 
           ">
           {/* skyblue to white background */} 
            <div className="absolute  -z-1 w-full  h-[458.5px]
           bg-gradient-to-b from-sky-200 via-gray-200 to-white">
          </div>

            <Hero/>

          </section>

          <LandingReport/>

           
          <SliderWithCat courseList={courseList}/>
          

           <section className="w-full flex flex-col items-center
             mt-20 mb-20 ">
            <Board 
             title="یادگیری و"
             titleBlue="گواهینامه"
             context="با کسب نمره قبولی در آزمون‌ها، گواهینامه رسمی پایان دوره به دو زبان فارسی و انگلیسی به شما اعطا می‌شود. علاوه بر دانلود و ذخیره، امکان اشتراک‌گذاری مستقیم گواهینامه در لینکدین نیز فراهم است."
             buttonTitle="آموزش های دارای گواهینامه"
             boardCover="https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2025%2F10%2F05%2Fcertificate.svg&w=1920&q=75"
            />
          </section>

          <section className="w-full flex flex-col items-center
             mt-20 mb-20 ">
            <Leaderboard/>
          </section>



           
          <SliderWithCat courseList={courseList} />
          

            <section className="w-full flex flex-col items-center
             mt-20 mb-20 ">
            <Board 
             title="تدریس در فرادرس"
             context="برای همکاری آموزشی، تدریس و ارایه آموزش در فرادرس و پیوستن به آن به عنوان عضو هیات علمی، به لینک زیر مراجعه کنید."
             buttonTitle="تدریس در فرادرس"
             boardCover="https://faradars.org/_next/image?url=https%3A%2F%2Ffaradars.org%2Fwp-content%2Fuploads%2F2025%2F05%2F06%2Fteacher.svg&w=1920&q=75"
            />
          </section>

          </div>
        </div>
    )
}

export default landingPage