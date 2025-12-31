import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type DiagonalCloseButtonProps = {
  title: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
  arrowSize?: string;
  navigateTo?: string;
  onClick?: () => void;
};

const DiagonalCloseButton = ({
  title = "Book Your Kid Meal Now",
  bgColor = "bg-white",
  hoverBgColor = "bg-black",
  textColor = "text-black",
  hoverTextColor = "text-white",
  borderRadius = "rounded-tr-2xl rounded-bl-2xl",
  paddingX = "px-8",
  paddingY = "py-4",
  fontSize = "text-sm",
  arrowSize = "w-5 h-5",
  navigateTo = '/login',
  onClick
}: DiagonalCloseButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button 
      className={`relative overflow-hidden ${bgColor} ${borderRadius} flex items-center justify-center gap-2 ${paddingX} ${paddingY} transition-all duration-300 group`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      {/* Static black background that will be revealed */}
      <div className={`absolute inset-0 ${hoverBgColor}`} />
      
      {/* Top-right sliding door - dynamic color */}
      <div 
        className={`absolute top-0 right-0 w-full h-full ${bgColor} origin-top-right transition-transform duration-500 ease-out`}
        style={{
          transform: isHovering 
            ? 'translateX(100%) translateY(-100%)' 
            : 'translateX(0) translateY(0)',
        }}
      />
      
      {/* Bottom-left sliding door - dynamic color */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-full ${bgColor} origin-bottom-left transition-transform duration-500 ease-out`}
        style={{
          transform: isHovering 
            ? 'translateX(-100%) translateY(100%)' 
            : 'translateX(0) translateY(0)',
        }}
      />

      <div className="relative z-10 flex items-center justify-center gap-2">
        <span 
          className={`
            font-bold ${fontSize} transition-colors duration-300
            ${isHovering ? hoverTextColor : textColor}
          `}
        >
          {title}
        </span>
        
        <ArrowRight 
          className={`
            ${arrowSize} flex-shrink-0 transition-colors duration-300
            ${isHovering ? hoverTextColor : textColor}
          `}
        />
      </div>
    </button>
  );
};

export default DiagonalCloseButton;


