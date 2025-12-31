import React from "react";
import { Check, Gift } from "lucide-react";

const plans = [
  {
    name: "Daily Plan",
    badge: "Flexible",
    badgeColor: "bg-[#FF9800]",
    description: "Perfect for trying out Nourished",
    price: "₹2,800",
    period: "20 meals/week",
    features: [
      "All Daily Plan features",
      "Save ₹100/week",
      "Meal customization",
      "Priority support",
      "Nutrition tracking",
    ],
    theme: "light",
  },
  {
    name: "Weekly Plan",
    badge: "Best Value",
    badgeColor: "bg-[#66BB6A]",
    description: "Most popular among parents",
    price: "₹850",
    period: "5 meals/week",
    features: [
      "All Daily Plan features",
      "Save ₹100/week",
      "Meal customization",
      "Priority support",
      "Nutrition tracking",
    ],
    theme: "dark",
  },
  {
    name: "Monthly Plan",
    badge: "Best Value",
    badgeColor: "bg-[#C482D0]",
    description: "Best savings for committed families",
    price: "₹2,800",
    period: "20 meals/week",
    features: [
      "All Daily Plan features",
      "Save ₹100/week",
      "Meal customization",
      "Priority support",
      "Nutrition tracking",
    ],
    theme: "light",
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="flex bg-white p-2 rounded-full shadow-sm px-3 items-center text-xs justify-center text-slate-900  font-semibold gap-2">
            <Gift className="w-4 h-4" />
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Simple Plans. Fresh Meals.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Pick a plan that fits your child's routine. Every option comes with
            fresh vegetarian meals, meal tracking, and complete delivery safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => {
            const isDark = plan.theme === "dark";

            return (
              <div className="  hover:border-2  hover:border-black rounded-2xl p-1 ">
                <div
                  key={index}
                  className={`relative flex flex-col p-8 rounded-2xl
                   ${
                     isDark
                       ? "bg-gradient-to-b from-[#000000] to-[#373737] text-white "
                       : "bg-[#EAEAEA] text-black"
                   }`}
                >
                  <div className="absolute top-6 right-6">
                    <span
                      className={`${plan.badgeColor} text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <div className="text-center mt-10 mb-8">
                    <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center py-6 px-4 rounded-2xl mb-8 ${
                      isDark ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm opacity-80 mt-1">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isDark ? "bg-white" : "bg-black"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isDark ? "text-black" : "text-white"
                            }`}
                          />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-tr-2xl rounded-bl-2xl font-bold text-lg transition-transform active:scale-95 ${
                      isDark
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
