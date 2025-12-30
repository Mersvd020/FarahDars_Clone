import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import "../../assets/core_Style/swiper.css";

// Course Card
import CourseCard from "../product_Card/courseCard";
import type { courseDataList } from "../../Page/landing/landingPage";

type courseListProps = {
   courseList: courseDataList[];
}

type tab = {
   tabIndex: number,
   technology: string
}

const SliderWithCat = ({ courseList }: courseListProps) => {
 
  // Slider tab 
  const sliderTab: string[] = ["همه", "برنامه نویسی", "هوش مصنوعی"];

  const tabHandler = (index: number, label: string) => {
    const tech = label === "همه" ? "" : label;   
    setTab({ ...tab, tabIndex: index, technology: tech });
  }
   
  const [tab, setTab] = useState<tab>({
    tabIndex: 0,
    technology: ""
  });

  const filteredCourse = courseList.filter((cr) => {
    if (tab.technology && !cr.technology.includes(tab.technology)) return false;
    return true;
  });

  // Swiper instance ref
  const swiperRef = useRef<SwiperType | null>(null);

  const sliderLeftHandler = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  const sliderRightHandler = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  return (
    <div className="w-full h-[506.42px]">
      <div className="w-full h-[15%] flex flex-row justify-between">
        <div className=" h-[75%]  text-[25px] max-md:text-[15px] whitespace-nowrap flex items-center">
          آموزش های پر مخاطب
        </div>
        <div className="w-[120px]  h-[80%] flex flex-row justify-end gap-2 items-center">
          <button 
            id="right"
            onClick={sliderRightHandler}
            className="w-[40%] h-[75%] bg-[gray]/30 rounded-[10px]"
          >
            <IoIosArrowForward className="text-[gray] hover:text-[black] transition hover:cursor-pointer p-3 w-full h-[90%]"/>
          </button>
          <button 
            id="left"
            onClick={sliderLeftHandler}
            className="w-[40%] h-[75%] bg-[gray]/30 rounded-[10px]"
          >
            <IoIosArrowBack className="text-[gray] hover:text-[black] transition hover:cursor-pointer p-3 w-full h-[90%]" />
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-5 w-full h-[10%] border-b border-[gray] px-3">
        {sliderTab.map((label, index) => (
          <button 
            key={index}
            onClick={() => tabHandler(index, label)} 
            className={`text-[15px] border-[blue]/60 hover:bg-[gray]/20 h-full transition-colors duration-300
              ${tab.tabIndex === index ? "border-b-2 text-[blue]" : ""}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/*silder*/}   
      <div className="Slider overflow-hidden w-full h-[75%] py-6">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          slidesPerView={4}
          spaceBetween={20}
          grabCursor={true}
          threshold={10}
          resistanceRatio={0.85}
          speed={400}
          dir="rtl"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }}
          className="h-full"
        >
          {filteredCourse.map((card) => (
            <SwiperSlide key={card.id} className="h-auto mr-1 max-md:mr-3">
              <CourseCard
                id={card.id}
                title={card.title}
                teacherName={card.teacherName}
                courseTime={card.courseTime}
                price={card.price}
                disCount={card.disCount}
                ImageAddress={card.ImageAddress}
              />
            </SwiperSlide>
          ))}
          
          <SwiperSlide className="h-auto">
            <div className="border border-[gray]/50 bg-[gray]/20 w-[200px] h-[350px] flex flex-col rounded-[12px] items-center justify-center">
              مشاهده همه
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )    
} 

export default SliderWithCat;