import React from 'react';

interface PillButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white-outline';
  onClick?: () => void;
  className?: string;
}

export const PillButton: React.FC<PillButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer';
  
  const variants = {
    primary: 'bg-coral text-white hover:bg-coral-dark hover:scale-[1.02] shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-coral text-coral hover:bg-coral hover:text-white',
    'white-outline': 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple',
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
