import { features } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center border-4 border-white">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-full h-full relative group cursor-pointer">
          <Image
            src={feature.image}
            alt={feature.id}
            width={950}
            height={950}
            quality={100}
            className={`w-full h-full ${
              index === 4
                ? "border-r-0"
                : "border-b-4 md:border-r-4 border-white"
            } grayscale group-hover:grayscale-0 transition-all`}
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-7 md:px-4 pb-5 md:pb-0 lg:pb-1.5 z-50 text-white group-hover:text-primary transition-all">
            <span className="max-w-[132px] text-[18px] md:text-[10px] lg:text-[12px] xl:text-[17px] font-semibold uppercase font-sans leading-5">
              {feature.title}
            </span>
            <feature.icon className="w-8 h-8" />
          </div>
          <div className="bg-gradient-to-t h-16 from-black to-transparent absolute right-0 left-0 md:right-[3px] bottom-0.5 md:bottom-0" />
        </div>
      ))}
    </div>
  );
};

export default Features;
