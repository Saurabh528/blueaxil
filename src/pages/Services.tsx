import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { CheckCircle, HardHat, Wrench } from 'lucide-react';
import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import FadeIn from '../components/animations/FadeIn';

const additionalFeatures = [
  {
    icon: HardHat,
    title: "Safety First",
    description: "Rigorous safety protocols and regular training for all personnel"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Comprehensive quality control measures at every project stage"
  },
  {
    icon: Wrench,
    title: "Expert Team",
    description: "Highly skilled professionals with years of industry experience"
  }
];

export default function Services() {
  return (
    <div className="bg-dark-950">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive pipeline and infrastructure solutions for your business needs"
      />

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <GlassCard gradient className="h-full overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Why Choose Us</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard className="text-center">
                    <div className="inline-block p-3 bg-primary-500/10 rounded-full mb-4">
                      <IconComponent className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </Container>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
}