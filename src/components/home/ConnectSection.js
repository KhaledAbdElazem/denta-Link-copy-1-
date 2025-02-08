// src/components/home/ConnectSection.js
import Image from "next/image";
import Button from "@/components/UI/Button/Button";

export default function ConnectSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="max-w-[656px]">
            <h2 className="font-cairo text-[40px] leading-[64px] font-semibold mb-[51px]">
              Connect with your next loyal patient in just a few clicks.
            </h2>
            <Button title="Get Started" link="/" className="block md:hidden" />
          </div>
          <Image 
            src="/images/Home/3d-cartoon-doctor-character-face-mask1.svg"
            alt="Doctor illustration"
            width={381}
            height={374}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}