import { motion } from 'framer-motion';
import { Calendar, MapPin, User, CheckCircle } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    location: string;
    client: string;
    scope: string;
    budget: string;
    status: string;
    year: string;
    details: string[];
    image: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-200 flex items-center mt-2">
            <Calendar className="w-4 h-4 mr-2" />
            {project.year}
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-gray-600">{project.location}</p>
          </div>
          <div className="flex items-start space-x-2">
            <User className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-gray-600">{project.client}</p>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-gray-600">{project.scope}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-blue-600 font-semibold">{project.budget}</span>
          <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {project.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}