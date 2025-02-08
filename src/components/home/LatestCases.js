// src/components/home/LatestCases.js
import Image from 'next/image';

export default function LatestCases({ cases = [] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cases.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Doctor Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-500">
                  <Image 
                    src={item.image}
                    alt={item.doctor}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Doctor Info */}
                <div>
                  <p className="font-semibold text-lg">{item.doctor}</p>
                  <p className="text-gray-500 text-sm">Location: {item.location}</p>
                  <p className="text-gray-500 text-sm">Title: {item.title}</p>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="text-gray-400">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}