import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";

const VideoSection = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <SectionLayout>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/about/about-video.png"
            alt="video"
            width={1000}
            height={600}
            className="w-[1200px] h-auto mx-auto"
          />
        </div>
      </SectionLayout>
    </div>
  );
};

export default VideoSection;
