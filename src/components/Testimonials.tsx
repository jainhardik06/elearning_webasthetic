"use client";

import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Ashutosh Kumar Pandey",
    role: "Cracked Microsoft & Amazon",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "I trusted Onlearning & enrolled in Alpha in my 2nd year for placement preparation. It gave me a good path to follow along with a streamlined syllabus."
  },
  {
    name: "Rojal Sapkota",
    role: "Cracked Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "The best things about Alpha was solving lots of questions while saving a lot of my time. In fact 2 of the Qs asked to me in Google interview were directly from Alpha."
  },
  {
    name: "Varad Ingale",
    role: "Cracked JP Morgan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    text: "I followed Onlearning for everything & watched almost all the videos. With their batch I could study consistently, the alternate day schedule kept me extra motivated."
  },
  {
    name: "Sarah Jenkins",
    role: "Cracked Netflix",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "The structured approach to system design helped me crack the toughest rounds. The mock interviews were a game changer for my confidence."
  },
  {
    name: "Michael Chen",
    role: "Cracked Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Coming from a non-CS background, the foundational courses were a lifesaver. The community support is unmatched."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  // Calculate visible reviews based on current index (showing 3 at a time)
  // For simplicity in this responsive design, we'll just slide the window
  // But to match the "3 cards" request perfectly with functionality:
  
  // We will just cycle through them. 
  // Let's make it simple: The index represents the start of the 3 visible cards.
  const visibleReviews = [
    reviews[currentIndex % reviews.length],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section className="py-20 space-y-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2f2f]">
        Read reviews from <span className="text-[#0b7b6e]">students</span>
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0b7b6e] hover:bg-[#0b7b6e] hover:text-white transition-all duration-300"
          aria-label="Previous reviews"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0b7b6e] hover:bg-[#0b7b6e] hover:text-white transition-all duration-300"
          aria-label="Next reviews"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="grid md:grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <div 
              key={`${review.name}-${index}`} 
              className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-[3px] border-[#e8f1ff] shadow-sm group-hover:border-[#0b7b6e] transition-colors duration-300">
                <Image 
                  src={review.image} 
                  alt={review.name} 
                  width={96} 
                  height={96} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-[11px] font-bold tracking-[0.15em] text-[#ff5722] uppercase mb-3 bg-[#fff0eb] px-3 py-1 rounded-full">
                {review.role}
              </div>
              <h3 className="text-lg font-bold text-[#0f2f2f] mb-4">
                {review.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex % reviews.length 
                ? 'bg-[#0b7b6e] w-8' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
