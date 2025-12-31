import { useState } from "react";
import { ArrowRight } from "lucide-react";
import DiagonalCloseButton from "../DiagonalCloseBtn";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Decorative torn paper effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background" style={{
        clipPath: "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)"
      }} />

      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=600&fit=crop"
              alt="Happy child with healthy meal"
              className="rounded-3xl shadow-2xl w-full max-w-md"
            />
            {/* Torn paper effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-transparent rounded-3xl" />
          </div>

          {/* Right side - Form */}
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              We're Here to Help
            </h2>
            <p className="text-muted-foreground mb-8">
              Send us a message and our team will get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-foreground font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-2 bg-secondary/50 border-border"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-foreground font-medium">
                    Email ID
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email id..."
                    className="mt-2 bg-secondary/50 border-border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-foreground font-medium">
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number..."
                    className="mt-2 bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-foreground font-medium">
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message...."
                  className="mt-2 bg-secondary/50 border-border min-h-[120px]"
                  required
                />
              </div>

               <DiagonalCloseButton title="Submit" bgColor="bg-black" hoverBgColor="bg-white" textColor="text-white" hoverTextColor="text-black"/>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
