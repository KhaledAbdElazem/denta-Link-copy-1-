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
            <h1 className="font-cairo text-[64px] leading-[64px] font-semibold mb-5">
              Find Trusted Patient
            </h1>
            <p className="font-cairo text-[24px] leading-[48px] text-[#918E8E] mb-9">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <Button title="Get Started" link="/" className="block md:hidden" />
          </div>
          <div className="absolute left-[869px] top-[206px]">
            <Image
              src="/images/About/doctor.svg"
              alt="Doctor illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}