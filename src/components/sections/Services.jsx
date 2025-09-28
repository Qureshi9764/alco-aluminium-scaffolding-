import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiTool, 
  FiShield, 
  FiSettings, 
  FiBook,
  FiTruck,
  FiClock,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiTool,
      title: 'Scaffolding Installation',
      description: 'Professional installation of aluminum scaffolding systems for residential, commercial, and industrial projects.',
      features: ['Same-day service available', 'Certified installation team', 'All safety equipment included'],
      image: 'installation',
      link: '/services/installation'
    },
    {
      icon: FiTruck,
      title: 'Equipment Rental',
      description: 'Flexible rental options for scaffolding equipment with delivery and pickup services across Abu Dhabi and UAE.',
      features: ['Flexible rental periods', 'Delivery & pickup included', 'Premium quality equipment'],
      image: 'rental',
      link: '/services/rental'
    },
    {
      icon: FiShield,
      title: 'Safety Inspections',
      description: 'Comprehensive safety inspections and compliance checks to ensure your scaffolding meets all regulations.',
      features: ['Daily inspection reports', 'Compliance certification', 'Risk assessment included'],
      image: 'safety',
      link: '/services/inspections'
    },
    {
      icon: FiBook,
      title: 'Training Programs',
      description: 'Professional training courses for scaffolding safety, installation, and maintenance procedures.',
      features: ['Certified training courses', 'Group & individual sessions', 'Industry-recognized certificates'],
      image: 'training',
      link: '/services/training'
    },
    {
      icon: FiSettings,
      title: 'Maintenance Services',
      description: 'Regular maintenance and repair services to keep your scaffolding in optimal condition.',
      features: ['Scheduled maintenance', 'Emergency repairs', 'Component replacement'],
      image: 'maintenance',
      link: '/services/maintenance'
    },
    {
      icon: FiClock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency support and assistance for urgent scaffolding requirements.',
      features: ['Emergency callout service', 'Technical support hotline', 'Rapid response team'],
      image: 'support',
      link: '/services/support'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-surface-light dark:bg-surface-dark transition-theme">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-accent-100 dark:bg-brand-accent-900 text-brand-accent-700 dark:text-brand-accent-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <FiTool className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary dark:text-text-primary-dark mb-3 sm:mb-4">
            Comprehensive Scaffolding Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary dark:text-text-secondary-dark max-w-3xl mx-auto">
            From installation to maintenance, we provide end-to-end scaffolding services 
            designed to meet your project requirements and safety standards.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Service Icon */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <FiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link 
                      to={service.link}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                    >
                      <span>Learn more</span>
                      <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Every project is unique. Our expert team will work with you to design 
              and implement the perfect scaffolding solution for your specific requirements.
            </p>
            
            <div className="flex justify-center">
              <Link 
                to="/contact-us" 
                className="text-blue-600 hover:text-blue-700 font-medium underline text-sm sm:text-base lg:text-lg"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
