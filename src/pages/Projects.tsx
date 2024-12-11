import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import FadeIn from '../components/animations/FadeIn';

export default function Projects() {
  return (
    <div className="bg-dark-950">
      <PageHeader
        title="Our Projects"
        subtitle="Excellence in pipeline infrastructure development"
      />

      <section className="py-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <GlassCard gradient className="overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                      <p className="text-gray-300">{project.location}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                      <p className="text-gray-300">{project.scope}</p>
                    </div>
                    <ul className="space-y-2 mt-4 border-t border-dark-800 pt-4">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-end pt-4">
                      <span className="px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
}