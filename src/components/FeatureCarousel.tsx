import { useState, useEffect } from 'react';
import { Package, ShieldCheck, Monitor } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: '100% Fresh & Veg.',
    description: 'Clean, simple ingredients kids love.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified delivery',
    description: 'Safe and secure delivery to your door.'
  },
  {
    icon: Monitor,
    title: 'Parent control panel',
    description: 'Track and manage meals easily.'
  }
];

export default function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = features[currentIndex].icon;

  return (
    <div className="bg-transparent w-[260px] rounded-xl p-4 flex flex-col items-start gap-3 ">
      <div className='flex items-center gap-3'>
      <div className="">
        <CurrentIcon className="w-6 h-6 text-black" />
      </div>
      <div className=' border-l-2 border-gray-200 pl-4'>
        <h3 className="font-bold text-gray-800">{features[currentIndex].title}</h3>
        <p className="text-sm text-gray-600">{features[currentIndex].description}</p>
      </div>
      </div>
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
    </div>
  );
}
