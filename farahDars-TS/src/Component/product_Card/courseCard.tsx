
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
     <div className="border-1 border-[gray]/50  w-[9%] h-full flex flex-col rounded-[12px] items-center
       flex flex-col items-center ">
        <picture className="w-full h-[50%] p-2 border">
          <img className="rounded-[12px]" src={ImageAddress}/>
        </picture>
        <article className="w-full h-[35%] border">

        </article>

        <div className="w-[95%] h-[15%] border">

        </div>
        
     </div>
 )
}

export default courseCard