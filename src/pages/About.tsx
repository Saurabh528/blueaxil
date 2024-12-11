import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo, leadership } from '../data/company';
import { Users, Award, Clock, Building } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import Container from '../components/layout/Container';
import GlassCard from '../components/ui/GlassCard';
import FadeIn from '../components/animations/FadeIn';

export default function About() {
  const stats = [
    {
      icon: Users,
      value: "20+",
      label: "Professional Staff"
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction"
    },
    {
      icon: Clock,
      value: "2+",
      label: "Years Experience"
    },
    {
      icon: Building,
      value: "3+",
      label: "Major Projects"
    }
  ];

  return (
    <div className="bg-dark-950">
      <PageHeader
        title="About Blue Axil"
        subtitle="A leading infrastructure company specializing in pipeline and construction solutions"
      />

      {/* Company Overview */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <GlassCard gradient className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
                <p className="text-gray-300 mb-6">
                  Founded in {companyInfo.established}, Blue Axil Infrastructure has quickly established itself
                  as a trusted name in the pipeline and construction industry. Our commitment to excellence
                  and innovation has helped us deliver outstanding results for our clients.
                </p>
                <p className="text-gray-300">
                  We specialize in comprehensive pipeline solutions, city gas distribution, and infrastructure
                  development, bringing technical expertise and professional excellence to every project we undertake.
                </p>
              </GlassCard>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard className="text-center">
                    <stat.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                    <h3 className="font-bold text-2xl mb-2 text-white">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Leadership</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet our visionary founders who lead BlueAxil Infrastructure
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <GlassCard gradient className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full object-cover ring-2 ring-primary-500/50"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{leader.name}</h3>
                      <p className="text-primary-400 mb-2">{leader.role}</p>
                      <p className="text-gray-300 mb-2">{leader.education}</p>
                      <p className="text-gray-400">From {leader.origin}</p>
                      <p className="text-gray-300 mt-4">{leader.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}