type boardProps = {
    title:string,
    titleBlue?:string,//optional
    context:string,
    buttonTitle:string,
    boardCover:string,//link

}

const Board = ({title,context,buttonTitle,boardCover,titleBlue}:boardProps)=>{

    return(
        <div className=" w-full h-[458.5px] flex flex-row justify-between ">
          <div className=" h-full w-[50%] flex flex-col justify-center"> 
          <article className="  w-full">
            <p className="text-[28px] font-bold ">{title}<span className="text-[blue]/80">{titleBlue}</span> </p>
            <p className=" text-[18px] leading-[40px] ">
             {context} 
            </p>
            <button className="hover:cursor-pointer bg-[blue]/70 mt-2 rounded-[5px] p-3  text-[white]">{buttonTitle}</button>
          </article>
          </div>

         
          <picture className="w-[30%] h-full flex flex-col items-center justify-center">
            <img src={boardCover}
             className="w-[96%] h-full"
              />
         </picture>

            
        </div>
    )
}

export default Board