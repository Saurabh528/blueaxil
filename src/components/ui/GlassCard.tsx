import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  gradient = false
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative backdrop-blur-lg rounded-xl
        ${gradient 
          ? 'bg-gradient-to-br from-primary-900/80 via-primary-800/60 to-dark-900/80 border border-primary-700/50' 
          : 'bg-primary-900/30 border border-primary-800/30'}
        ${className}
      `}
      whileHover={hover ? {
        y: -5,
        transition: { duration: 0.2 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
}