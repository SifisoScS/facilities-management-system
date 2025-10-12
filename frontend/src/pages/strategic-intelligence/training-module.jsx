import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Link from 'next/link';

// Custom number formatting function to avoid hydration errors
const formatNumber = (value, unit) => {
  if (unit === 'R') {
    return `R ${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
  }
  return `${value}${unit}`;
};

// Mock data for Training Programs
const trainingPrograms = [
  {
    level: 'Foundation Level',
    title: 'FM Fundamentals',
    description: 'Essential knowledge and skills for new facility management professionals, covering basic principles, safety protocols, and operational procedures.',
    items: ['Safety protocols and compliance', 'Basic maintenance procedures', 'Communication standards', 'Quality assurance basics'],
    hours: 40,
    modules: 8,
    passRate: 95,
  },
  {
    level: 'Intermediate Level',
    title: 'Technical Specialization',
    description: 'Advanced technical training for specialized facility management areas including HVAC, electrical systems, and building automation.',
    items: ['HVAC system management', 'Electrical troubleshooting', 'Building automation systems', 'Preventive maintenance planning'],
    hours: 80,
    modules: 12,
    passRate: 87,
  },
  {
    level: 'Advanced Level',
    title: 'Leadership & Management',
    description: 'Strategic leadership development for facility management supervisors and managers, focusing on team leadership and operational excellence.',
    items: ['Team leadership skills', 'Budget management', 'Strategic planning', 'Performance optimization'],
    hours: 120,
    modules: 15,
    passRate: 92,
  },
  {
    level: 'Expert Level',
    title: 'Strategic FM Excellence',
    description: 'Executive-level program for senior facility management professionals focusing on strategic planning, innovation, and organizational leadership.',
    items: ['Strategic facility planning', 'Innovation management', 'Stakeholder engagement', 'Change leadership'],
    hours: 160,
    modules: 20,
    passRate: 96,
  },
];

// Mock data for Career Development Pathways
const careerPathways = [
  {
    title: 'Facilities Assistant',
    level: 'Entry Level • 0-2 Years Experience',
    description: 'Foundation role focusing on basic maintenance, safety protocols, and support functions under supervision.',
  },
  {
    title: 'Facilities Technician',
    level: 'Intermediate Level • 2-5 Years Experience',
    description: 'Specialized technical role with expertise in specific systems and independent problem-solving capabilities.',
  },
  {
    title: 'Facilities Supervisor',
    level: 'Leadership Level • 5-8 Years Experience',
    description: 'Team leadership role managing daily operations, coordinating resources, and ensuring service delivery.',
  },
  {
    title: 'Facilities Manager',
    level: 'Management Level • 8-12 Years Experience',
    description: 'Strategic management role overseeing facility operations, budget management, and stakeholder relations.',
  },
  {
    title: 'Senior Facilities Director',
    level: 'Executive Level • 12+ Years Experience',
    description: 'Executive leadership role responsible for strategic planning, innovation, and organizational transformation.',
  },
];

// Mock data for Core Skills Development
const coreSkills = [
  {
    category: 'Technical Skills',
    items: ['HVAC Systems', 'Electrical Systems', 'Building Automation'],
  },
  {
    category: 'Management Skills',
    items: ['Team Leadership', 'Budget Management', 'Strategic Planning'],
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Problem Solving', 'Customer Service'],
  },
];

export default function TrainingModule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold">Training Module</h1>
          </div>
          <Link href="/" className="text-blue-300 hover:text-blue-100 transition-colors">
            Back to Home
          </Link>
        </div>
      </header>
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Generational Programs for FM Roles</h2>
            <p className="text-lg text-slate-600 mb-8">
              Comprehensive training and development programs to build facility management expertise across all levels.
            </p>

            {/* Training Programs */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Training Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trainingPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{program.level}</h4>
                    <h5 className="text-md font-medium text-slate-700 mb-2">{program.title}</h5>
                    <p className="text-sm text-slate-600 mb-4">{program.description}</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 mb-4">
                      {program.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-600">{formatNumber(program.hours, '')} Hours</p>
                    <p className="text-sm text-slate-600">{formatNumber(program.modules, '')} Modules</p>
                    <p className="text-sm text-slate-600">{formatNumber(program.passRate, '%')} Pass Rate</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Career Development Pathways */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Career Development Pathways</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPathways.map((pathway, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{`${index + 1}. ${pathway.title}`}</h4>
                    <p className="text-sm text-slate-600 mb-2">{pathway.level}</p>
                    <p className="text-sm text-slate-600">{pathway.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Core Skills Development */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Core Skills Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{skill.category}</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600">
                      {skill.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
}