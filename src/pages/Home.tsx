import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import LatestProjects from '../components/LatestProjects';
import OperationalMilestones from '../components/OperationalMilestones';
import Container from '../components/layout/Container';
import GradientButton from '../components/ui/GradientButton';
import FadeIn from '../components/animations/FadeIn';
import ScaleIn from '../components/animations/ScaleIn';
import GlassCard from '../components/ui/GlassCard';

const highlights = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero compromise on safety standards with rigorous protocols"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Proven track record of on-time project completion"
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Industry-leading quality standards in every project"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled professionals with years of experience"
  }
];

export default function Home() {
  return (
    <div className="bg-dark-950">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/jcb.png"
            alt="Construction Equipment"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-dark-950/60 to-dark-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-70" />
        </div>

        {/* Content */}
        <Container className="relative z-10 h-screen flex items-center">
          <div className="max-w-3xl">
            <FadeIn direction="left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">Building Tomorrow's</span>
                <br />
                <span className="text-white">Infrastructure Today</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Leading the way in pipeline infrastructure with cutting-edge technology and unmatched expertise in construction solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <GradientButton to="/services" size="lg">
                  Our Services
                  <ArrowRight className="ml-2" size={20} />
                </GradientButton>
                <GradientButton to="/contact" variant="dark" size="lg">
                  Contact Us
                  <ArrowRight className="ml-2" size={20} />
                </GradientButton>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <GlassCard gradient className="text-center">
                  <highlight.icon className="w-12 h-12 mx-auto mb-4 text-primary-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">{highlight.title}</h3>
                  <p className="text-gray-300">{highlight.description}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <LatestProjects />
      </motion.div>

      {/* Milestones Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <OperationalMilestones />
      </motion.div>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <Container>
          <FadeIn>
            <GlassCard gradient className="text-center p-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Ready to Start Your Project?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                From concept to completion, we deliver excellence in pipeline infrastructure. Let's build something extraordinary together.
              </p>
              <GradientButton to="/contact" size="lg">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </GradientButton>
            </GlassCard>
          </FadeIn>
        </Container>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
}