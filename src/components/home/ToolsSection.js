// src/components/home/ToolsSection.js
import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className="py-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-[100px]">
          <Image 
            src="/images/Home/tools.svg"
            alt="Dental tools"
            width={491}
            height={327}
            className="object-contain"
          />
          <div className="max-w-[615px]">
            <h2 className="font-cairo text-[40px] leading-[48px] font-semibold mb-4">
              Buy, sell, or exchange dental tools,
              <br />
              all in one convenient platform.
            </h2>
            <p className="font-cairo text-[32px] leading-[36px] text-[#918E8E]">
              Turn your dental training into real-life success stories, with <span className="text-[#247CFF]">DENTALINK</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}