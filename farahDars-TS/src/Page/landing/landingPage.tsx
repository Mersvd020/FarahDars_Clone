import Hero from "./Hero"
import LandingReport from "./LandingReport"
import SliderWithCat from "../../Component/landing/SliderWithCat"

const landingPage = ()=>{
    return (
        <div className="  w-full bg-gradient-to-b from-sky-200 via-gray-200 to-white ">
          <div className=" min-2xl:container min-2xl:mx-auto flex flex-col place-items-center gap-5 ">
          <section className="w-full flex flex-col items-center ">
            <Hero/>
          </section>
          <LandingReport/>
           <div className="w-[80%]">
          <SliderWithCat/>
           </div>

          </div>
        </div>
    )
}

export default landingPage