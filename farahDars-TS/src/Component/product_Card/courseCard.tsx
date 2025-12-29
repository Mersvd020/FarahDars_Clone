import { MdAccessTime } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FiBookmark } from "react-icons/fi";
import { Tooltip } from 'react-tooltip';
export type courseList = {
      id:number,
      title:string,
      teacherName:string,
      courseTime:number,
      price:number,
      disCount:number,
      ImageAddress:string
}

const courseCard = ({id,title,teacherName,courseTime,price,disCount,ImageAddress}:courseList)=>{
    
 return (
     <div key={id} className=" hover:shadow-lg hover:cursor-pointer hover:bg-[gray]/2 outline-1 outline-[gray]/50  w-[286px] h-[350px] rounded-[12px]
       flex flex-col items-center ">
        <picture className="relative  w-full h-[50%] p-2 ">
          <img className=" rounded-[12px]" src={ImageAddress}/>
          <button 
           data-tooltip-id="favorite-tooltip"
           data-tooltip-content={"افزودن به علاقه‌مندی‌ها"}
          className="w-[25px] h-[25px] rounded-full
           absolute top-[10%] right-[7%] hover:cursor-pointer ">
           <FiBookmark className="w-full h-full "/>
          </button>
        </picture>
        <Tooltip
             id="favorite-tooltip"
             place="top"
             style={{ 
               backgroundColor: "#1f2937", 
               color: "#fff", 
               borderRadius: "8px",
               padding: "8px 12px",
             }}
           />
        <article className="w-[95%] h-[35%]   flex flex-wrap justify-between">
           <p className="text-[16px] font-medium">{title}</p>

            <article className="w-full text-[12px] flex flex-col justify-evenly" >
            <span className="flex items-center gap-2"><LiaChalkboardTeacherSolid className=" text-[20px]"/><p>{teacherName}</p></span>
            <span className="flex items-center gap-2"><MdAccessTime className="text-[18px]"/>{courseTime.toLocaleString('fa-IR')}ساعت</span>
            </article>
        </article>

        <div className="w-[95%] h-[15%] p-2 border-t border-[gray]/90 flex flex-row items-center justify-between">
            <section  className="flex gap-1">
            <span className=" line-through text-[14px] text-[gray]/90">{price.toLocaleString("fa")}</span>
             <span className=" text-[15px] font-medium mr-2">{(price-price*disCount/100).toLocaleString("fa") }</span>
              <span className="text-[gray] text-[13px]">تومان</span>
            </section>

            <button className="w-[40px] h-[30px] bg-[red] text-[white] text-[13px] rounded-[7px]">{disCount <= 80 ? disCount.toLocaleString("fa") + "%" : "شگفتی"}</button>
        </div>
        
     </div>
 )
}

export default courseCard