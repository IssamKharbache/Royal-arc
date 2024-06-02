import Image from "next/image";
import React from "react";

const VideoEditing = () => {
  return (
    <div id="videoEditing">
      <div className="p-4 mx-auto relative z-10 w-full  px-2  ">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-red-300 to bg-sky-200 bg-opacity-80 font-semibold">
          Video Editing
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We make and edit your videos and post them on social media to make
          better reach for your product
        </p>
        <div>
          <Image
            src="/videoediting.jpg"
            alt="video editing"
            width={6000}
            height={1800}
            className=" w-[750px] md:w-[1600px] mx-auto pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;
