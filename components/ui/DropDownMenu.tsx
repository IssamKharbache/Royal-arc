import { motion } from "framer-motion"
import Link from "next/link"
import { Link as ScrollLink} from "react-scroll";


interface DropDownMenuProps {
    onClose:  () =>void,
    isMenuOpen: boolean,
}
const links = [
  {
    title: " Website Design",
    to: "websitedesign",
  },
  {
    title: "Graphic Design",
    to: "graphicDesign",
  },
  {
    title: "Video Editing",
    to: "videoEditing",
  },
  {
    title: "Shopify Stores",
    to: "shopifyStores",
  },
];
const DropDownMenu: React.FC<DropDownMenuProps> = ({onClose}) => {
  // isMenuOpen ? document.body.style.overflow="hidden" : document.body.style.overflow = "auto";
  return (
    <motion.div className="w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-slate-300 p-6 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl" initial={{opacity:0,y:"-80%"}} animate={{opacity:1,y:0}} exit={{opacity:0,y:"-100%"}} transition={{duration:1}}>
        <div className="flex-col flex space-y-10">
            <Link href="/pricing"   className="text-black text-2xl">Pricing</Link>
            <Link href="/contact" className="text-black text-2xl">Contact</Link>
            <div className="text-black text-2xl flex flex-col space-y-10">
          {links.map((link, idx) => {
            return (
              <ScrollLink
                key={idx}
                isDynamic={true }
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-45}
                duration={600}
              >
                {link.title}
              </ScrollLink>
            );
          })}
          </div>
        </div>
    </motion.div>
  )
}

export default DropDownMenu