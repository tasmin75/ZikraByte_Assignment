import { ArrowRight, Salad, ShieldCheck, Truck, CalendarDays } from "lucide-react";
import DiagonalCloseButton from "../DiagonalCloseBtn";

const features = [
  {
    icon: Salad,
    title: "Super-Nutritious Meals",
  },
  {
    icon: ShieldCheck,
    title: "Sparkling-Clean Kitchens",
  },
  {
    icon: Truck,
    title: "Safe, Verified Delivery",
  },
  {
    icon: CalendarDays,
    title: "Flexible Meal Plans",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden bg-blue-50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className=" bg-white p-2 rounded-full shadow-sm px-3 mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
                Healthy Meals. Safe Delivery. Zero Guesswork.
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                We make mealtime fun for kids and stress-free for parents. Every box is packed with fresh veggies, clean cooking, and safe delivery—so children eat well and parents feel relaxed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-foreground" />
                  <span className="font-medium text-foreground text-sm">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <DiagonalCloseButton title="  Know More..." bgColor="bg-black" hoverBgColor="bg-white" textColor="text-white" hoverTextColor="text-black"/>

          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://pngimg.com/d/breakfast_PNG24.png"
                alt="Healthy meal box with fresh vegetables and sandwich"
                className=" w-full"
              />
            </div>
            
           
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent/20 to-success/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
