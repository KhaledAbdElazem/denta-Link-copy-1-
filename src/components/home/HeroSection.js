import Image from "next/image";
import Button from "@/components/UI/Button/Button";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[url('/images/header.svg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pt-[100px] md:pt-[150px]">
          {/* Text Content */}
          <div className="max-w-[608px] text-center md:text-left">
            <h1 className="font-cairo text-[32px] leading-[40px] md:text-[48px] md:leading-[64px] font-semibold mb-5">
              Struggling to find patients?
              <br />
              We've got you covered!
            </h1>
            <p className="font-cairo text-[18px] leading-[24px] md:text-[32px] md:leading-[48px] text-[#918E8E] mb-9">
              Turn your dental training into real-life success stories, with{" "}
              <span className="text-[#247CFF]">DENTALINK</span>
            </p>
            <Button title="Get Started" link="/" className="block md:hidden" />
          </div>
          {/* Image */}
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/Home/earth.svg"
              alt="Globe with medical glove"
              width={554}
              height={408}
              className="object-contain w-[300px] h-[220px] md:w-[600px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}