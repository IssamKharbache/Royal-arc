import { CardHoverEffect } from "../snippets/card-hover-effect-snippet"


const Services = () => {
  return (
    <div id="services" className="max-w-5xl mx-auto py-20 pb-24 ">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-24 px-2">
        <div className="text-4xl md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-red-300 to bg-sky-200 bg-opacity-80 font-semibold">
        Our Services
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We offer a wide range of services to help you grow your business. From website design to video editing to social media management
        </p>
        <CardHoverEffect />
    
      </div>
    </div>
  )
}

export default Services