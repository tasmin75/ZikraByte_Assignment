import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png"
import DiagonalCloseBtn from "./DiagonalCloseBtn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = ["Home", "Pricing", "Our Menu", "About"];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent mb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] py-4 flex items-center justify-between">
        
        <img
          src={logo}
          alt="Nourished"
          className="w-[56px] h-[52px] cursor-pointer md:w-[68px] md:h-[64px]"
        />

        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-6 py-4 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer
                ${
                  activeNav === item
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item} 
              </button>
            ))}
          </nav>

          <DiagonalCloseBtn />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md
        transition-all duration-300 ease-in-out
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <nav className="flex flex-col items-center gap-4 py-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                console.log("Setting active nav to:", item);
                setActiveNav(item);
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300
              ${
                activeNav === item
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}

          <DiagonalCloseBtn />
        </nav>
      </div>
    </header>
  );
}