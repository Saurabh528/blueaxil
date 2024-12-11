import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'primary' | 'accent' | 'dark';
}

export default function GradientButton({
  children,
  to,
  onClick,
  size = 'md',
  className = '',
  variant = 'primary'
}: GradientButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-white',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-700 hover:from-accent-600 hover:to-accent-800 text-white',
    dark: 'bg-gradient-to-r from-dark-700 to-dark-900 hover:from-dark-800 hover:to-dark-950 text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion(to ? Link : 'button');

  return (
    <MotionComponent
      to={to || ''}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}