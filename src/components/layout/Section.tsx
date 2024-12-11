import { ReactNode } from 'react';
import Container from './Container';
import FadeIn from '../animations/FadeIn';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function Section({ 
  children, 
  className = '',
  title,
  subtitle,
  dark = false
}: SectionProps) {
  return (
    <section className={`py-20 ${dark ? 'bg-navy-900 text-white' : 'bg-gray-50'} ${className}`}>
      <Container>
        {(title || subtitle) && (
          <FadeIn className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl ${dark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </FadeIn>
        )}
        {children}
      </Container>
    </section>
  );
}