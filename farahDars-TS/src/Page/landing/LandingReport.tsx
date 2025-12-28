import {PiStudentDuotone} from "react-icons/pi"

type ReportType = {
    id:number,
    num:number
}

const LandingReport = ()=>{
   
   
   const report : ReportType[] =[
      {id:1,num:300},
      {id:2,num:500},
      {id:3,num:800},
      {id:4,num:1300}
   ]

    return(
       <div className=" w-[80%] h-[104px] font-bold mb-20
         rounded-[25px] shadow-blue-300 shadow-sm
         flex flex-row items-center p-2">
           {report.map((rep)=>(
             <div key={rep.id} className="w-1/4 h-full flex flex-row items-center">
            <PiStudentDuotone className="w-[40px] h-[40px] "/>
            <span className="text-[gray] text-xl">{rep.num.toLocaleString('fa-IR')}+دانشجو</span>
            </div>
           ))} 
            
           
       </div>
    )
}

export default LandingReport