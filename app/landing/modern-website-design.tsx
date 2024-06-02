import { HeroParallaxComponent } from "../snippets/HeroParallax";


const ModernWebSiteDesign = () => {
  return (
    <div  id="websitedesign">
         <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-24 px-2">
        <div className="text-4xl md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-red-300 to bg-sky-200 bg-opacity-80 font-semibold">
         Modern Website design<br /> That works 
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom solutions for your business. We are a team of creatives who are excited to help you grow and develop your business
        </p>
    
      </div>
      <HeroParallaxComponent />
    </div>
  )
}

export default ModernWebSiteDesign;