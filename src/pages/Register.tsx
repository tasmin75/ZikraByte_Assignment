import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import topViewPreview from "@/assets/top-view.jpg";
import registerBg from "@/assets/register-right.png";

const slides = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2-jZhSFCbsQaa50jg9bjjugynbaKNY8qLQ&s",
  },
  {
    img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png",
  },
  {
    img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L2hpcHBvdW5pY29ybl9waG90b19vZl9kaXNzZWN0ZWRfZmxvYXRpbmdfdGFjb19zZXBhcmF0ZV9sYXllcl9vZl84M2Q0ODAwNC03MDc0LTRlZjItYjYyOC1jZTU3ODhiYzQxOGEucG5n.png",
  },
];

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${topViewPreview})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.2)",
          zIndex: -1,
        }}
      />

      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
        <div className="w-full max-w-[554px] bg-white rounded-2xl px-8 py-6 shadow-xl">
          <div className="max-w-[490px] mx-auto">
            <div className="mb-4">
              <h1 className="font-['Chillax'] font-semibold text-2xl leading-[34px] text-[#101828]">
                Register
              </h1>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-gray-50 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 mt-2"
              >
                Sign up
              </button>

              <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden lg:block w-[590px] h-[600px] relative">
          <div className="absolute w-full h-full">
            <img
              src={registerBg}
              alt="Top view delicious meals arrangement"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[300px] h-[400px] flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute w-full ${
                    index === currentIndex
                      ? "opacity-100 z-20 animate-popInSettle"
                      : "opacity-0 scale-90 z-10"
                  } transition-opacity duration-500`}
                >
                  <img
                    src={slide.img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
