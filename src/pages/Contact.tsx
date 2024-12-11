import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/company';
import Container from '../components/layout/Container';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import FadeIn from '../components/animations/FadeIn';
import { quickQuestions } from '../data/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleQuickQuestion = (message: string) => {
    setFormData(prev => ({ ...prev, message }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-dark-950">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for any inquiries or project discussions"
      />

      <section className="py-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <FadeIn>
              <GlassCard gradient className="p-8">
                <h2 className="text-2xl font-bold mb-8 gradient-text">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-3 px-6 rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </GlassCard>
            </FadeIn>

            {/* Quick Questions */}
            <div>
              <h2 className="text-2xl font-bold mb-8 gradient-text">Quick Questions</h2>
              <div className="space-y-4">
                {quickQuestions.map((q) => (
                  <motion.button
                    key={q.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuickQuestion(q.message)}
                    className="w-full text-left p-4 glass-card hover:border-primary-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-primary-400" />
                      <span className="text-gray-300">{q.question}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn>
              <GlassCard className="flex items-center space-x-4">
                <div className="bg-primary-500/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  {companyInfo.contact.phone.map((number, index) => (
                    <p key={index} className="text-gray-300">{number}</p>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.1}>
              <GlassCard className="flex items-center space-x-4">
                <div className="bg-primary-500/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">{companyInfo.contact.email}</p>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard className="flex items-center space-x-4">
                <div className="bg-primary-500/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-gray-300">{companyInfo.headquarters}</p>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </Container>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
}