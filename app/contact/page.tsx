"use client";
import ContactForm from "@/components/ui/contact-form";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";




const Contact = () => {
  const [loading, setLoading] = useState(false);


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 bg-black min-h-screen "
    >
       <div className="p-6 md:p-10 flex items-center justify-between z-50 ">
        <div>
          <Link  href="/" className="">
            <Image
              priority
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-full"
            />
          </Link>
        </div>
        <Link
            className="inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 md:px-8 font-semibold focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 text-white gap-2"
            href="/"
          >
            <FaLongArrowAltLeft />
            Go back Home
          </Link>
        </div>
    <ContactForm />
    </motion.section>
  );
};

export default Contact;
