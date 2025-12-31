import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import FeatureCarousel from '../FeatureCarousel';
import boyImg from'@/assets/boy.png';
import bgImg from '@/assets/bg.png';
import vegi2 from '@/assets/vegies/vegi2.png';
import vegi3 from '@/assets/vegies/vegi3.png';
import vegi4 from '@/assets/vegies/vegi4.png';
import vegi6 from '@/assets/vegies/vegi6.png';
import vegi7 from '@/assets/vegies/vegi7.png';
import vegi8 from '@/assets/vegies/vegi8.png';
import DiagonalCloseButton from '../DiagonalCloseBtn';

interface Vegetable {
  id: number;
  emoji: JSX.Element;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
}

export default function Herosection() {
  const navigate = useNavigate();
  const [vegetables, setVegetables] = useState<Vegetable[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const moveAmount = 30; 
  const centerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    centerPos.current = { 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    };

    const veggies = [
      { emoji: <img src={vegi2} className="rounded-full w-[90px] object-cover" />, x: 5, y: 85 },
      { emoji: <img src={vegi4} className="rounded-full w-[190px] object-cover" />, x: 4, y: 40 },
      { emoji: <img src={vegi7} className="rounded-full w-[120px] object-cover" />, x: 88, y: 80 },
      { emoji: <img src={vegi3} className="rounded-full w-[60px] object-cover" />, x: 40, y: 70 },
      { emoji: <img src={vegi3} className="rounded-full w-[60px] object-cover" />, x: 30, y: 15 },
      { emoji: <img src={vegi6} className="rounded-full w-[130px] object-cover" />, x: 95, y: 19 },
      { emoji: <img src={vegi3} className="rounded-full w-[60px] object-cover" />, x: 63, y: 15 },
      { emoji: <img src={vegi4} className="rounded-full w-[90px] object-cover" />, x: 85, y: 35 },
    ];

    const initialVegetables = veggies.map((v, i) => ({
      id: i,
      emoji: v.emoji,
      x: v.x,
      y: v.y,
      baseX: v.x,
      baseY: v.y,
      size: Math.random() * 30 + 40,
    }));

    setVegetables(initialVegetables);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      const relX = (mousePos.current.x - centerPos.current.x) / centerPos.current.x;
      const relY = (mousePos.current.y - centerPos.current.y) / centerPos.current.y;
      
      const offsetX = relX * moveAmount;
      const offsetY = relY * moveAmount;
      
      const offsetXPercent = (offsetX / window.innerWidth) * 100;
      const offsetYPercent = (offsetY / window.innerHeight) * 100;
      
      setVegetables((prevVegetables) =>
        prevVegetables.map((veg) => ({
          ...veg,
          x: veg.baseX + offsetXPercent,
          y: veg.baseY + offsetYPercent,
        }))
      );
    };

    const handleResize = () => {
      centerPos.current = { 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header />

      {vegetables.map((veg) => (
        <div
          key={veg.id}
          className="absolute pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: `${veg.x}%`,
            top: `${veg.y}%`,
            fontSize: `${veg.size}px`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          {veg.emoji}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20 grid md:grid-cols-2 gap-1 items-center">
        <div>
          <h1 className="sm:text-6xl text-3xl font-chillax font-black text-white mb-6 leading-tight">
            Good Food, Happy Kids, Zero Worry.
          </h1>
          <p className="text-white sm:text-lg mb-8 leading-relaxed">
            We cook fresh vegetarian meals and deliver them straight to your child's school or home!
            You get transparency, safety, and meals they'll actually finish.
          </p>

          <FeatureCarousel />

          <DiagonalCloseButton title='Book Your Kid Meal Now'/>
        </div>

        <div className="relative sm:w-[790px] sm:-ml-[6rem] col-span-1">
          <img
            src={boyImg}
            alt="Happy kid with lunch box"
            className="w-full h-auto rounded-lg relative z-10"
          />
        </div>
      </div>
    </div>
  );
}