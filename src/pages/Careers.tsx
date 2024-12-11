import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Upload, CheckCircle } from 'lucide-react';
import { openPositions, benefits } from '../data/careers';
import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import FadeIn from '../components/animations/FadeIn';
import GradientButton from '../components/ui/GradientButton';

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-dark-950">
      <PageHeader
        title="Join Our Team"
        subtitle="Build your career with a company that's building tomorrow's infrastructure"
      />

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Why Work With Us</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join a team that values innovation, growth, and excellence
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <GlassCard className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-20 relative overflow-hidden">
        <Container>
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Open Positions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore opportunities to grow with us
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <FadeIn key={position.id} delay={index * 0.1}>
                <GlassCard
                  gradient={selectedPosition === position.id}
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedPosition(
                    selectedPosition === position.id ? null : position.id
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <span className="flex items-center text-gray-300">
                          <Briefcase className="w-4 h-4 mr-2 text-primary-400" />
                          {position.department}
                        </span>
                        <span className="flex items-center text-gray-300">
                          <MapPin className="w-4 h-4 mr-2 text-primary-400" />
                          {position.location}
                        </span>
                        <span className="flex items-center text-gray-300">
                          <Clock className="w-4 h-4 mr-2 text-primary-400" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>

                  {selectedPosition === position.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-dark-800"
                    >
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Application Form */}
                      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Resume
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <label className="w-full flex flex-col items-center px-4 py-6 bg-dark-800 text-gray-300 rounded-lg tracking-wide border border-dark-700 cursor-pointer hover:bg-dark-700 transition-colors">
                              <Upload className="w-8 h-8 mb-2 text-primary-400" />
                              <span className="mt-2 text-base">
                                {formData.resume ? formData.resume.name : 'Upload your resume'}
                              </span>
                              <input
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                required
                              />
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Cover Letter
                          </label>
                          <textarea
                            value={formData.coverLetter}
                            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                            required
                          ></textarea>
                        </div>
                        <GradientButton type="submit" className="w-full">
                          Submit Application
                        </GradientButton>
                      </form>
                    </motion.div>
                  )}
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