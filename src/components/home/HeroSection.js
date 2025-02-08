// src/components/home/HeroSection.js
import Image from "next/image";
import Button from "@/components/UI/Button/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[909px] w-full overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 left-[-20px]">
        <Image 
          src="/images/header.svg"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="relative pt-[268px]">
          <div className="max-w-[608px]">
            <h1 className="font-cairo text-[48px] leading-[64px] font-semibold mb-5">
              Struggling to find patients?
              <br />
              We've got you covered!
            </h1>
            <p className="font-cairo text-[32px] leading-[48px] text-[#918E8E] mb-9">
              Turn your dental training into real-life success stories, with{" "}
              <span className="text-[#247CFF]">DENTALINK</span>
            </p>
            <Button title="Get Started" link="/" className="block md:hidden" />
          </div>
          <div className="absolute right-[-100px] top-[94px] ">
              <Image 
                src="/images/Home/earth.svg"
                alt="Globe with medical glove"
                width={554}
                height={408}
                className="transform rotate-[-159.36 deg]"
              />
            </div>
        </div>
      </div>
    </section>
  );
}