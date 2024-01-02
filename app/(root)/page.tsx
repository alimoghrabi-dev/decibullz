import Features from "@/components/home/Features";
import HeroVideo from "@/components/shared/HeroVideo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-[calc(100vh-96px)] flex flex-col md:flex-row items-center justify-center custom-background-image relative gap-6 md:gap-9 lg:gap-12 px-5 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-black opacity-[0.35]" />
        <div className="flex flex-col items-center gap-5 z-50">
          <Image
            src="/hero-section-text.webp"
            alt="text"
            width={950}
            height={950}
            quality={100}
            className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
          <p className="text-base lg:text-xl font-medium text-gray-100 text-center">
            SAVE BIG ON SELECT HEARING <br className="block md:hidden" />
            PROTECTION PRODUCTS!
          </p>
          <Button
            variant={"outline"}
            className="rounded-3xl border-none text-primary outline-none mt-1.5 text-base md:text-xl font-semibold py-4 md:py-6 px-8 md:px-12 font-sans hover:bg-primary hover:text-white shadow-lg shadow-primary/25">
            Shop Now
          </Button>
        </div>
        <div className="flex items-center justify-center p-2 md:p-6 lg:p-12 rounded-xl z-50">
          <Image
            src="/hero-icon.webp"
            alt="image"
            width={950}
            height={950}
            quality={100}
            className="max-w-[205px] lg:max-w-[250px] xl:max-w-sm"
          />
        </div>
      </div>
      <Features />
      <HeroVideo videoSource="https://www.youtube.com/watch?v=cWSGs1boCks&list=TLGG0OeiWFwZbBcwMTAxMjAyNA&t=1s" />
    </section>
  );
}
