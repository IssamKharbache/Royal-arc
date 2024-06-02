"use client";
import { motion } from "framer-motion"
import { ThreeDCardExample } from "../snippets/3d-card-snippets";
import { EvervaultCardSnippet } from "../snippets/evervault-card-snippets";



const GraphicDesign = () => {
  return (
    <div id="graphicDesign"  className="mb-12 mt-16 pb-16" >
          <div   className="p-4 mx-auto relative z-10 w-full  px-2">
        <div   className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-red-300 to bg-sky-200 bg-opacity-80 font-semibold">
         Graphic Design 
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        We also create beautiful visuals for your business . From logos to social media posts to icons. We cover it all
        </p>
        <div className="items-center md:flex md:justify-center md:mx-auto md:space-x-10">
            <motion.div initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            className="px-10 md:px-0"
            >
            <ThreeDCardExample />
            
            </motion.div>
            <motion.div initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            className="px-10 md:px-0"
            >
            <EvervaultCardSnippet />
            
            </motion.div>
        </div>
    
      </div>
    
    </div>
  )
}

export default GraphicDesign