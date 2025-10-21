import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiTool, 
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';

// Import service images
import steelScaffolding from '../../assets/steel-transfom-img.jpg';
import combinedScaffolding from '../../assets/COMBINED-SCAFFOLDING.png';
import installationImg from '../../assets/DSC_4691--1-scaled.jpg';
import cantileverScaffolding from '../../assets/CANTILEVER SCAFFOLDING.png';
import maintenanceImg from '../../assets/DSC_4730-2-scaled.jpg';
import safetyImg from '../../assets/DSC_4738-200x300.jpg';
import trainingImg from '../../assets/DSC_4753-copy-200x300.jpg';
import deliveryImg from '../../assets/DSC_4789-200x300.jpg';
import aluminiumPlatform from '../../assets/ALUMINIUM-PLATFORM-LADDER-.jpg';
import warehouseLadder from '../../assets/WARE-HOUSE-LADDER.png';
import fiberglassLadder from '../../assets/fiberglass-straight-scaled.jpg';
import aTypeLadder from '../../assets/aluminium a type dual purpose.jpg';
import ladderManufacturing from '../../assets/ware house ladder.png';
import singleWidthTower from '../../assets/73-121-1659x2048.png';
import doubleWidthTower from '../../assets/PODIUM.png';
import bridgeScaffolding from '../../assets/BRIDGE-SCAFFOLDING.png';
import foldingTower from '../../assets/FOLDING-TOWER.png';
import stairwayTower from '../../assets/STAIRWAY-681x1024.jpg';
import cupLockScaffolding from '../../assets/steel-transfom-img.jpg';

const Services = () => {
  const services = [
    {
      title: 'Scaffolding Delivery',
      description: 'On-time scaffolding delivery and pickup across UAE with careful handling.',
      features: ['Scheduled windows', 'Careful loading/unloading', 'UAE-wide logistics'],
      image: deliveryImg,
      link: '/services/scaffolding-delivery'
    },
    {
      title: 'Aluminium Scaffolding',
      description: 'Lightweight aluminium scaffolding supply, rental, and setup.',
      features: ['Quick assembly', 'Multiple heights', 'Safety guardrails'],
      image: aluminiumPlatform,
      link: '/services/aluminium-scaffolding'
    },
    {
      title: 'Warehouse Ladder',
      description: 'Industrial warehouse ladders with platforms and guardrails.',
      features: ['Anti-slip steps', 'Stable platforms', 'Custom heights'],
      image: warehouseLadder,
      link: '/services/warehouse-ladder'
    },
    {
      title: 'Fiberglass Ladder',
      description: 'Non-conductive ladders ideal for electrical work environments.',
      features: ['Non-conductive', 'Weather resistant', 'Lightweight'],
      image: fiberglassLadder,
      link: '/services/fiberglass-ladder'
    },
    {
      title: 'A Type Ladder',
      description: 'Versatile A-type ladders with secure locks and anti-slip feet.',
      features: ['Secure locks', 'Anti-slip feet', 'Portable'],
      image: aTypeLadder,
      link: '/services/a-type-ladder'
    },
    {
      title: 'Ladder Manufacturers',
      description: 'Custom ladder manufacturing and bulk supply with documentation.',
      features: ['Custom sizes', 'Bulk pricing', 'Certificates'],
      image: ladderManufacturing,
      link: '/services/ladder-manufacturers'
    },
    {
      title: 'Single Width Mobile Towers',
      description: 'Compact single width mobile towers for sale and hire, perfect for confined spaces.',
      features: ['Easy mobility', 'Quick assembly', 'Space-efficient design'],
      image: singleWidthTower,
      link: '/services/single-width-mobile-towers'
    },
    {
      title: 'Double Width Mobile Towers',
      description: 'Heavy-duty double width mobile towers for sale and hire with enhanced stability.',
      features: ['Greater stability', 'Higher load capacity', 'Wide working platform'],
      image: doubleWidthTower,
      link: '/services/double-width-mobile-towers'
    },
    {
      title: 'Bridgeway Mobile Towers',
      description: 'Specialized bridgeway mobile towers for access between two points.',
      features: ['Dual access points', 'Safe crossing platform', 'Adjustable height'],
      image: bridgeScaffolding,
      link: '/services/bridgeway-mobile-towers'
    },
    {
      title: 'Folding Mobile Towers',
      description: 'Innovative folding mobile towers for easy transport and storage.',
      features: ['Compact folding design', 'Easy transport', 'Quick setup'],
      image: foldingTower,
      link: '/services/folding-mobile-towers'
    },
    {
      title: 'Stairway Mobile Towers',
      description: 'Mobile towers with integrated stairway access for enhanced safety.',
      features: ['Internal stairway', 'Enhanced safety', 'Easy access'],
      image: stairwayTower,
      link: '/services/stairway-mobile-towers'
    },
    {
      title: 'Steel Cup Lock Scaffolding',
      description: 'Robust steel cup lock scaffolding system for heavy-duty applications.',
      features: ['High load capacity', 'Quick assembly', 'Versatile configurations'],
      image: cupLockScaffolding,
      link: '/services/steel-cup-lock-scaffolding'
    },
    {
      title: 'MS Scaffolding Rent',
      description: 'Flexible MS scaffolding rentals with fast delivery, setup support, and compliant equipment across UAE.',
      features: ['Daily/weekly/monthly terms', 'Rapid delivery & pickup', 'Erection & dismantling support'],
      image: steelScaffolding,
      link: '/services/ms-rent'
    },
    {
      title: 'MS Scaffolding Sale',
      description: 'Supply of new MS scaffolding systems and components with documentation and after-sales support.',
      features: ['Full system packages', 'Compliance certificates', 'After-sales technical support'],
      image: combinedScaffolding,
      link: '/services/ms-sale'
    },
    {
      title: 'Installation & Setup',
      description: 'Professional installation and setup services for scaffolding systems with certified teams.',
      features: ['Certified installation teams', 'Same-day service available', 'Comprehensive safety checks'],
      image: installationImg,
      link: '/services/installation'
    },
    {
      title: 'Installation/Disassembly',
      description: 'Certified erection and dismantling services with tagging and safety checks.',
      features: ['Certified crews', 'Method statements', 'Quality checks'],
      image: cantileverScaffolding,
      link: '/services/installation-disassembly'
    },
    {
      title: 'Maintenance',
      description: 'Regular maintenance and repair services to keep your scaffolding in optimal condition.',
      features: ['Scheduled maintenance', 'Emergency repairs', 'Component replacement'],
      image: maintenanceImg,
      link: '/services/maintenance'
    },
    {
      title: 'Safety Inspections',
      description: 'Comprehensive safety inspections and compliance checks to ensure your scaffolding meets all regulations.',
      features: ['Daily inspection reports', 'Compliance certification', 'Risk assessment included'],
      image: safetyImg,
      link: '/services/inspections'
    },
    {
      title: 'Training',
      description: 'Professional training courses for scaffolding safety, installation, and maintenance procedures.',
      features: ['Certified training courses', 'Group & individual sessions', 'Industry-recognized certificates'],
      image: trainingImg,
      link: '/services/training'
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
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Service Image */}
                <div className="w-full h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col bg-white dark:bg-gray-800">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <Link 
                      to={service.link}
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm sm:text-base transition-colors"
                    >
                      <span>Learn more</span>
                      <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
