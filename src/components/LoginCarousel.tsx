import { useState, useEffect } from 'react';
import bgImg from '@/assets/top-view.jpg'

const slides = [
  {
    title: 'Built on trust, strengthened by everyday reliability.',
    bgColor: 'bg-yellow-200'
  },
  {
    title: 'Your child\'s wellbeing deserves unwavering commitment.',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Consistency isn\'t a feature — it\'s our promise.',
    bgColor: 'bg-green-300'
  }
];

export default function LoginCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[590px] h-[600px] relative">
      {/* <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-gray-300"></div>
      </div> */}

      <div className="relative">
        <img
          src={bgImg}
          alt="Food background"
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
        />

        <div className={`absolute inset-0 ${slides[currentIndex].bgColor} w-[300px] m-8 rounded-3xl flex items-center justify-center p-12 transition-all duration-500`}>
          <div className="max-w-md">
            <h2 className="text-3xl font-black text-gray-900 leading-snug">
              {slides[currentIndex].title}
            </h2>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full border-2 border-gray-900 transition-all ${
                i === currentIndex ? 'bg-gray-900' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
