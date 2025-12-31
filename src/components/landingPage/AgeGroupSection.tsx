 import { Calendar, Gift } from "lucide-react";
import bg from '@/assets/ageGropuBg.png'
import kid1 from '@/assets/kid1.png'
import kid2 from '@/assets/kid2.png'
import kid3 from '@/assets/kid3.png'

const ageGroups = [
  {
    name: "Little Explorers",
    age: "(6-8 yrs)",
    description: "Simple, mild, happy meals for small appetites.",
    image:kid1,
    color: "bg-accent",
  },
  {
    name: "Bright Movers",
    age: "(9-11 yrs)",
    description: "Tasty combos and veggie-packed dishes.",
    image:kid2,
    color: "bg-accent",
  },
  {
    name: "Teen Power Pack",
    age: "(12-14 yrs)",
    description: "Bigger portions and energy-boosting meals.",
    image:kid3,
    color: "bg-success/30",
  },
];

const AgeGroupSection = () => {
  return (
    <section
    style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', }}
     className="py-20 px-4 relative ">
      
      
      <div className="container max-w-6xl mx-auto relative z-10 ">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="flex bg-white p-2 rounded-full shadow-sm px-3 items-center text-xs justify-center text-slate-900  font-semibold gap-2">
            <Gift className="w-4 h-4" />
            This Weeks Menu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Meals Kids Actually Love
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Start by choosing your child's age group. We'll show you colorful, nutritious, and delicious. Each meal designed to delight taste buds and fuel growing minds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 ">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className={`
                text-center group cursor-pointer sm:w-[200px] w-full max-w-sm mx-auto
                ${index === 1 && 'mt-[5rem]'}
                `}
              style={{ animationDelay: `${index * 150}ms` }}
            >

              <div className="relative mx-auto mb-6 w-48 h-48">
                <div className={`absolute inset-2 ${group.color}`} />
                <img
                  src={group.image}
                  alt={group.name}
                  className="relative z-10 w-full h-full object-cover  group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-foreground">{group.name}</h3>
              <p className="text-foreground font-medium mb-2">{group.age}</p>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-card" style={{
        clipPath: "polygon(0 100%, 100% 100%, 100% 50%, 50% 0, 0 50%)"
      }} />
    </section>
  );
};

export default AgeGroupSection;
