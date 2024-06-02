"use client"
import NavBar from "@/components/ui/NavBar";
import { Spotlight } from "@/components/ui/Spotlight";
import SliderOne from "@/components/ui/sliders/SliderOne";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ShopifyStores from "./landing/shopify-stores";
import VideoEditing from "./landing/video-editing";
import Faqs from "./faq";
import ModernWebSiteDesign from "./landing/modern-website-design";
import GraphicDesign from "./landing/graphic-design";
import Services from "./landing/services";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-white">
      <NavBar />
      <Spotlight className="left-80 -top-[2200px] md:-top-[2500px] "  fill="white"/>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-24 px-2">
        <TextGenerateEffect words="Grow and Develop Your Business" className="text-center pb-6" />
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom solutions for your business. We are a team of creatives who are excited to help you grow and develop your business
        </p>
        <Link className="flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white hover:bg-white font-semibold hover:text-gray-700 duration-200" href="/contact">
         Get in touch
        </Link>
        <div className="w-full pt-20 ">
          {/* slider*/}
          <SliderOne />
          {/* website design */}
          <ModernWebSiteDesign  />
          {/* graphic design */}
          <GraphicDesign />
          {/* Video editing */}
          <VideoEditing />
          {/* shopify store */}
          <ShopifyStores />
          {/* services */}
          <Services />
          {/* FAQS */}
          <Faqs />
        </div>
      </div>
    </div>
  );
}
