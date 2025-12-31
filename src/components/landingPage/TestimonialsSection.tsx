import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "His lunchbox finally comes home empty.",
    description: "My son actually finishes his meals now, and I get delivery alerts every day.",
    name: "Ritu",
    role: "Parent of Grade 4",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Best decision for my daughter's nutrition.",
    description: "The meals are fresh, colorful, and my daughter loves every single one of them.",
    name: "Priya",
    role: "Parent of Grade 6",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "No more morning meal prep stress!",
    description: "I used to spend hours planning meals. Now Nourished handles everything perfectly.",
    name: "Arjun",
    role: "Parent of Grade 3",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5971866/pexels-photo-5971866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fresh food background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div 
          className="bg-white transition-all duration-500 ease-in-out px-8 md:px-20 py-12 md:py-16 text-center rounded-t-[10rem] rounded-b-[14rem]"
          style={{
            clipPath: "polygon(1% 6%, 100% 6%, 87% 100%, 12% 100%)",
          }}
        >

          <div className="flex flex-col items-center max-w-3xl mx-auto">
            <span className="bg-[#F3F3F1] px-4 py-1 rounded-full text-xs font-semibold text-gray-600 mb-6">
              Testimonial
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              Parents Trust Us. Kids Love Us.
            </h2>
            
            <p className="text-gray-500 text-sm md:text-base mb-10">
              Real stories from families who use Nourished every day.
            </p>

            <div key={currentIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <blockquote className="text-xl md:text-2xl font-bold text-black mb-3">
                "{current.quote}"
              </blockquote>
              <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-8">
                {current.description}
              </p>

              <div className="flex items-center justify-center gap-3 mb-8 border-t border-gray-100 pt-6">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-10 h-10 rounded-full object-cover grayscale"
                />
                <div className="text-left">
                  <p className="font-bold text-black text-sm leading-none">{current.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{current.role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-black hover:bg-gray-800 text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;