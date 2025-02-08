// src/components/home/ServicesSection.js
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-cairo text-[48px] leading-[165.6%] font-medium text-center mb-20">
          Our Services
        </h2>
        <div className="relative">
          {/* Service Cards */}
          <div className="flex justify-center gap-12">
            {[
              { title: "Patients", icon: "/images/Home/Patients.svg" },
              { title: "Exchange", icon: "/images/Home/Exchange.svg" },
              { title: "Buy Tools", icon: "/images/Home/buyTools.svg" },
            ].map((service, index) => (
              <div
                key={index}
                className="w-[250px] h-[250px] bg-[#F0F6FF] border-[0.2px] border-white rounded-[16px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="mb-6"
                />
                <h3 className="font-cairo text-[32px] leading-[60px] font-medium">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}