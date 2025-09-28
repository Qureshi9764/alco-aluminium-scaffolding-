import React, { useState } from 'react';
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
  FiCheck,
  FiUsers,
  FiAward
} from 'react-icons/fi';
import UnderConstruction from '../components/common/UnderConstruction';

const ServicesPage = () => {
  const [showUnderConstruction, setShowUnderConstruction] = useState(true);

  // Show UnderConstruction page if enabled
  if (showUnderConstruction) {
    return (
      <UnderConstruction
        title="Services Page Under Construction"
        subtitle="We're detailing our comprehensive service offerings!"
        description="Our Services page is currently being enhanced with detailed service descriptions, pricing information, and process workflows. We're working hard to provide you with comprehensive information about our professional scaffolding services and solutions."
        showContactInfo={true}
      />
    );
  }

  const services = [
    {
      id: 'installation',
      title: 'Professional Installation',
      description: 'Expert scaffolding installation services for projects of all sizes, from residential to large-scale commercial developments.',
      icon: FiTool,
      image: 'installation',
      features: [
        'Certified installation teams',
        'Same-day service available',
        'Comprehensive safety checks',
        'Equipment quality guarantee',
        'Project timeline adherence'
      ],
      process: [
        'Site assessment and planning',
        'Safety briefing and preparation',
        'Professional installation',
        'Quality inspection and handover'
      ],
      pricing: 'Starting from $150/day',
      duration: '2-6 hours depending on complexity'
    },
    {
      id: 'rental',
      title: 'Equipment Rental',
      description: 'Flexible scaffolding rental options with comprehensive support, delivery, and pickup services across Abu Dhabi and UAE.',
      icon: FiTruck,
      image: 'rental',
      features: [
        'Flexible rental periods',
        'Free delivery and pickup',
        'Premium quality equipment',
        'Maintenance included',
        'Insurance coverage options'
      ],
      process: [
        'Quote and booking',
        'Equipment delivery',
        'Setup assistance if needed',
        'Scheduled pickup on completion'
      ],
      pricing: 'From $45/day per unit',
      duration: 'Daily, weekly, or monthly rates'
    },
    {
      id: 'safety-inspections',
      title: 'Safety Inspections',
      description: 'Comprehensive safety inspections and compliance checks to ensure your scaffolding meets all UAE regulations.',
      icon: FiShield,
      image: 'safety',
      features: [
        'Daily inspection reports',
        'Compliance certification',
        'Risk assessment included',
        'Digital documentation',
        'Emergency response protocols'
      ],
      process: [
        'Initial safety assessment',
        'Detailed inspection checklist',
        'Compliance report generation',
        'Certification and recommendations'
      ],
      pricing: 'From $85 per inspection',
      duration: '1-2 hours per inspection'
    },
    {
      id: 'training',
      title: 'Training Programs',
      description: 'Professional training courses covering scaffolding safety, installation procedures, and maintenance protocols.',
      icon: FiBook,
      image: 'training',
      features: [
        'Industry-certified courses',
        'Group and individual sessions',
        'Hands-on practical training',
        'Certification upon completion',
        'Ongoing support resources'
      ],
      process: [
        'Training needs assessment',
        'Customized course design',
        'Practical and theoretical training',
        'Assessment and certification'
      ],
      pricing: 'From $195 per person',
      duration: 'Half-day to 3-day programs'
    },
    {
      id: 'maintenance',
      title: 'Maintenance Services',
      description: 'Regular maintenance and repair services to keep your scaffolding equipment in optimal condition and extend its lifespan.',
      icon: FiSettings,
      image: 'maintenance',
      features: [
        'Scheduled maintenance programs',
        'Emergency repair services',
        'Component replacement',
        'Performance optimization',
        'Extended equipment life'
      ],
      process: [
        'Equipment assessment',
        'Maintenance schedule planning',
        'Preventive maintenance work',
        'Performance monitoring'
      ],
      pricing: 'From $120/hour',
      duration: 'Scheduled or on-demand'
    },
    {
      id: 'support',
      title: '24/7 Emergency Support',
      description: 'Round-the-clock emergency support and assistance for urgent scaffolding requirements and safety concerns.',
      icon: FiClock,
      image: 'support',
      features: [
        'Emergency callout service',
        'Technical support hotline',
        'Rapid response team',
        'Safety incident support',
        'Equipment replacement'
      ],
      process: [
        'Emergency contact received',
        'Rapid response deployment',
        'On-site problem resolution',
        'Follow-up and documentation'
      ],
      pricing: 'Emergency rates apply',
      duration: 'Immediate response'
    }
  ];

  const benefits = [
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience'
    },
    {
      icon: FiShield,
      title: 'Safety First',
      description: 'Compliant with all UAE safety standards'
    },
    {
      icon: FiAward,
      title: 'Quality Guaranteed',
      description: 'Premium equipment and professional service'
    },
    {
      icon: FiClock,
      title: 'Reliable Service',
      description: 'On-time delivery and project completion'
    }
  ];

  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-theme">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary-50 to-brand-accent-50 dark:from-brand-primary-950 dark:to-brand-accent-950 py-16 lg:py-24 transition-theme">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
              Professional 
              <span className="text-gradient"> Scaffolding Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary dark:text-text-secondary-dark mb-8">
              From installation to maintenance, we provide comprehensive scaffolding 
              services designed to meet your project needs and exceed safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="btn-primary">
                Get Service Quote
              </Link>
              <a href="tel:+971581375601" className="btn-secondary">
                Call (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-aluminum-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Service Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of scaffolding services to support your project 
              from planning to completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all duration-300"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Process</h4>
                  <ol className="space-y-2">
                    {service.process.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-3">
                        <span className="w-6 h-6 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-600 text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Pricing and Duration */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">Pricing</h5>
                      <p className="text-primary-600 font-bold">{service.pricing}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">Duration</h5>
                      <p className="text-gray-600 text-sm">{service.duration}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={`/contact-us?service=${service.id}`}
                    className="btn-primary flex-1"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    to={`/services/${service.id}`}
                    className="btn-secondary flex-1"
                  >
                    Learn More
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FiClock className="w-16 h-16 mx-auto mb-4 text-red-200" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              24/7 Emergency Support
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Urgent scaffolding needs or safety concerns? Our emergency response 
              team is available around the clock to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971581375601" className="btn-secondary bg-white text-red-600 hover:bg-gray-100 border-white">
                <FiClock className="w-4 h-4 mr-2" />
                Emergency Hotline
              </a>
              <Link to="/contact-us?urgent=true" className="btn-secondary border-white text-white hover:bg-white/10">
                Emergency Contact Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-aluminum-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free consultation and customized 
            service solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link to="/projects" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
