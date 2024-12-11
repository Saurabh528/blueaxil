import { motion } from 'framer-motion';
import { Award, Users, Building2, CheckCircle } from 'lucide-react';

const icons = {
  "Project Success": Award,
  "Industry Recognition": CheckCircle,
  "Client Trust": Building2,
  "Team Excellence": Users,
};

interface MilestoneProps {
  title: string;
  description: string;
  index: number;
}

export default function MilestoneCard({ title, description, index }: MilestoneProps) {
  const IconComponent = icons[title as keyof typeof icons] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 rounded-full p-3">
          <IconComponent className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}