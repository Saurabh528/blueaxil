import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Container from './layout/Container';
import GlassCard from './ui/GlassCard';
import FadeIn from './animations/FadeIn';
import { Calendar, MapPin, User, CheckCircle } from 'lucide-react';

export default function LatestProjects() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Container>
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Our Latest Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering excellence in pipeline infrastructure across Delhi & NCR
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <User className="w-5 h-5 text-primary-400 mt-1" />
                    <p className="text-gray-300">{project.client}</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                    <p className="text-gray-300">{project.scope}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-dark-800">
                    <span className="text-primary-400 font-semibold">{project.budget}</span>
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
  );
}