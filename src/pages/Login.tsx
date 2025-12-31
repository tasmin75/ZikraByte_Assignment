import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import bgImg from '@/assets/top-view.jpg';
import topViewPreview from '@/assets/top-view.jpg';

const slides = [
  {
    title: 'Built on trust, strengthened by everyday reliability.',
    bgColor: 'bg-yellow-200'
  },
  {
    title: 'Your child\'s wellbeing deserves unwavering commitment.',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Consistency isn\'t a feature — it\'s our promise.',
    bgColor: 'bg-green-300'
  }
];


export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${topViewPreview})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)', 
          zIndex: -1, 
        }}
      />
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
        <div className="hidden lg:block w-[590px] h-[600px] relative">
          <div className="absolute w-full h-full">
            <img
              src={bgImg}
              alt="Top view delicious meals arrangement"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>


         <div
            className={`absolute inset-0 ${slides[currentIndex].bgColor} w-[300px]  m-8 rounded-3xl flex items-center justify-center p-12 transition-all duration-500`}
          >
            <div className="max-w-md">
              <h2 className="text-3xl font-black text-gray-900 leading-snug">
                {slides[currentIndex].title}
              </h2>
            </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full border-2 border-gray-900 transition-all ${
                  i === currentIndex ? 'bg-gray-900' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
         </div>
        </div>

        <div className="w-full max-w-[554px] bg-white rounded-2xl px-8 py-6 shadow-xl">
          <div className="max-w-[490px] mx-auto">
            <div className="mb-4">
              <h1 className="font-['Chillax'] font-semibold text-2xl leading-[34px] text-[#101828]">
                Login
              </h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <button type="button" className="text-blue-600 text-sm font-medium hover:underline">
                    Forgot Password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Login
              </button>

              <div className="text-center">
                <span className="text-gray-500">Or</span>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  type="button"
                  className=" flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
                <button
                  type="button"
                  className=" flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </button>
              </div>

              <p className="text-center text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Create account
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
