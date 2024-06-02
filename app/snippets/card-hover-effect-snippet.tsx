import { HoverEffect } from "@/components/ui/card-hover-effect";
import {  Poppins } from "next/font/google";
import { PiVideoCamera, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

const poppins = Poppins({ subsets: ["latin"] ,weight:["400","500","600","700"]});

export function CardHoverEffect() {
  return (
    <div className={`${poppins.className} font-semibold max-w-5xl mx-auto px-8`}>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "Website Design",
    description:
      "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
  
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
   
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiVideoCamera  className="w-8 h-8 text-blue-600" /></div>,
    title: "Video editing",
    description:
      "We make and edit your videos to be elegant and professional which give your business more reach.",
   
  },

  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
  
  },
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
    title: "Social Media",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
  
  },
 
  {
    icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
 
  },
];
