import { ArrowRight } from "lucide-react";
import lady from "@/assets/lady.png"
import { Button } from "../ui/button";
import DiagonalCloseButton from "../DiagonalCloseBtn";

const MealBoxSection = () => {
  return (
    <section className="py-16 px-4 bg-card overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src={lady}
                alt="Happy parent with phone"
                className=" w-full max-w-md mx-auto lg:mx-0"
              />
              
            </div>
            
            <div className="absolute top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-success/10 rounded-full blur-3xl" />
          </div>

          <div className="lg:pl-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Build Your Kid<br />
                Perfect Meal Box
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Every child eats differently. Build a meal box that fits their taste, routine, and nutrition needs. Swap dishes, set preferences, and add extras with a few quick taps.
              </p>

              <DiagonalCloseButton title="See The Menu" bgColor="bg-black" hoverBgColor="bg-white" textColor="text-white" hoverTextColor="text-black"/>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute right-0 top-1/4 hidden xl:block opacity-60">
        <div className="w-48 h-48 bg-gradient-to-br from-accent/30 to-success/20 rounded-3xl rotate-12 blur-sm" />
      </div>
    </section>
  );
};

export default MealBoxSection;
