import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Weekly Menu", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "About Us", href: "#" },
  ];

  const locations = [
    { name: "Schools", href: "#" },
    { name: "Hostels", href: "#" },
    { name: "Learning Centers", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Wave decoration */}
      <div className="relative">
        <svg className="w-full h-16 text-foreground" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,30 Q180,60 360,30 T720,30 T1080,30 T1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-primary-foreground rounded-xl flex items-center justify-center">
                <span className="text-2xl">🥗</span>
              </div>
              <span className="text-xl font-display font-bold">Nourished</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Fresh, vegetarian meals designed for growing kids. Delivered daily with safety, nutrition, and parent transparency at the core
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Locations We Serve</h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location.name}>
                  <a
                    href={location.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Address</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p className="font-medium text-primary-foreground">Nourished Foods Pvt. Ltd.</p>
              <p>
                Plot No. 24, Evergreen Towers, 5th Floor,<br />
                Hitech City, Hyderabad, Telangana – 500081
              </p>
              <p>
                Email: <a href="mailto:support@nourished.com" className="hover:text-primary-foreground transition-colors">support@nourished.com</a>
              </p>
              <p>
                Phone: <a href="tel:+91XXXXXXXXXX" className="hover:text-primary-foreground transition-colors">+91 XXXXXXXXXX</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            Copyright © 2025 | Nourished
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
