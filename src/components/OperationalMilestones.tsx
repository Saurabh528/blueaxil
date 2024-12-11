import { motion } from 'framer-motion';
import { operationalMilestones } from '../data/company';
import Container from './layout/Container';
import GlassCard from './ui/GlassCard';
import FadeIn from './animations/FadeIn';

export default function OperationalMilestones() {
  return (
    <section className="py-20 bg-dark-950 relative overflow-hidden">
      <Container>
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Operational Milestones</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our journey of excellence and growth in numbers
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operationalMilestones.map((milestone, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard gradient className="h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary-400">
                  {milestone.title}
                </h3>
                <p className="text-gray-300">
                  {milestone.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
    </section>
  );
}