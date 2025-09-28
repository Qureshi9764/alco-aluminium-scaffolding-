import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi';
import UnderConstruction from '../components/common/UnderConstruction';
import { 
  updateContactForm, 
  setContactFormSubmitting, 
  setContactFormSubmitted,
  selectContactForm 
} from '../redux/slices/formSlice';

const ContactUs = () => {
  const [showUnderConstruction, setShowUnderConstruction] = useState(true);
  const dispatch = useDispatch();
  const contactForm = useSelector(selectContactForm);
  const [activeTab, setActiveTab] = useState('contact');

  // Show UnderConstruction page if enabled
  if (showUnderConstruction) {
    return (
      <UnderConstruction
        title="Contact Us Page Under Construction"
        subtitle="We're building a better way to connect with you!"
        description="Our Contact Us page is currently being enhanced with improved forms, better contact options, and streamlined communication features. We're working hard to provide you with the most convenient ways to reach our team."
        showContactInfo={true}
      />
    );
  }

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      primary: '+971 58 137 5601',
      secondary: '+971 58 137 5601',
      description: 'Mon-Fri 7AM-6PM, Sat 8AM-4PM',
      action: 'tel:+971581375601'
    },
    {
      icon: FiMail,
      title: 'Email',
      primary: 'alcoaaluminiumscaffolding1@gmail.com',
      secondary: 'alcoaaluminiumscaffolding1@gmail.com',
      description: '24/7 response within 2 hours',
      action: 'mailto:alcoaaluminiumscaffolding1@gmail.com'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      primary: 'Musaffah',
      secondary: 'Abu Dhabi, UAE',
      description: 'Visit our showroom and warehouse',
      action: 'https://maps.google.com'
    },
    {
      icon: FiClock,
      title: 'Emergency',
      primary: '24/7 Emergency Hotline',
      secondary: '+971 58 137 5601',
      description: 'Urgent scaffolding support',
      action: 'tel:+971581375601'
    }
  ];

  const offices = [
    {
      city: 'Abu Dhabi',
      address: 'Musaffah, Abu Dhabi, UAE',
      phone: '+971 58 137 5601',
      email: 'alcoaaluminiumscaffolding1@gmail.com',
      isHeadquarters: true
    },
    {
      city: 'Abu Dhabi',
      address: 'Musaffah, Abu Dhabi, UAE',
      phone: '+971 58 137 5601',
      email: 'alcoaaluminiumscaffolding1@gmail.com'
    },
    {
      city: 'Abu Dhabi',
      address: 'Musaffah, Abu Dhabi, UAE',
      phone: '+971 58 137 5601',
      email: 'alcoaaluminiumscaffolding1@gmail.com'
    },
    {
      city: 'Abu Dhabi',
      address: 'Musaffah, Abu Dhabi, UAE',
      phone: '+971 58 137 5601',
      email: 'alcoaaluminiumscaffolding1@gmail.com'
    }
  ];

  const handleInputChange = (field, value) => {
    dispatch(updateContactForm({ [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setContactFormSubmitting(true));
    
    // Simulate form submission
    setTimeout(() => {
      dispatch(setContactFormSubmitting(false));
      dispatch(setContactFormSubmitted(true));
    }, 2000);
  };

  const ContactForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              required
              value={contactForm.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              required
              value={contactForm.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              required
              value={contactForm.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company (Optional)
          </label>
          <div className="relative">
            <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={contactForm.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter company name"
            />
          </div>
        </div>
      </div>

      {/* Project Information */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Type
        </label>
        <select
          value={contactForm.projectType}
          onChange={(e) => handleInputChange('projectType', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Select project type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
          <option value="emergency">Emergency Service</option>
          <option value="rental">Equipment Rental</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <textarea
            required
            rows={6}
            value={contactForm.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project requirements..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={contactForm.isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {contactForm.isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending Message...
          </>
        ) : (
          <>
            <FiSend className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );

  const QuoteForm = () => (
    <form className="space-y-6">
      {/* Quick Quote Form */}
      <div className="bg-primary-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Quote Request
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Height (meters)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary-500"
              placeholder="e.g., 10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coverage Area (sqm)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary-500"
              placeholder="e.g., 100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Duration
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary-500">
              <option value="">Select duration</option>
              <option value="1-7">1-7 days</option>
              <option value="1-4">1-4 weeks</option>
              <option value="1-3">1-3 months</option>
              <option value="3+">3+ months</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <ContactForm />
    </form>
  );

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
              Get In 
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary dark:text-text-secondary-dark mb-8">
              Ready to start your project? Contact our expert team for a free consultation 
              and customized scaffolding solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  <p className="font-medium text-gray-900">{info.primary}</p>
                  <p className="text-gray-600">{info.secondary}</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">{info.description}</p>
                <a
                  href={info.action}
                  className="btn-primary text-sm"
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  Contact Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-aluminum-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Tab Navigation */}
              <div className="flex mb-8 bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    activeTab === 'contact'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  Contact Form
                </button>
                <button
                  onClick={() => setActiveTab('quote')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    activeTab === 'quote'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  Quick Quote
                </button>
              </div>

              {/* Form Content */}
              <div className="card">
                {contactForm.submitted ? (
                  <div className="text-center py-8">
                    <FiCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 2 hours.
                    </p>
                    <button
                      onClick={() => dispatch(setContactFormSubmitted(false))}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {activeTab === 'contact' ? 'Send us a Message' : 'Get Quick Quote'}
                    </h2>
                    {activeTab === 'contact' ? <ContactForm /> : <QuoteForm />}
                  </>
                )}
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Locations
              </h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className={`card ${office.isHeadquarters ? 'border-primary-200 bg-primary-50' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {office.city}
                        {office.isHeadquarters && (
                          <span className="ml-2 px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
                            HQ
                          </span>
                        )}
                      </h3>
                      <FiMapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>{office.address}</p>
                      <p>
                        <FiPhone className="w-4 h-4 inline mr-2" />
                        <a href={`tel:${office.phone}`} className="hover:text-primary-600">
                          {office.phone}
                        </a>
                      </p>
                      <p>
                        <FiMail className="w-4 h-4 inline mr-2" />
                        <a href={`mailto:${office.email}`} className="hover:text-primary-600">
                          {office.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="card bg-red-50 border-red-200 mt-8">
                <div className="flex items-center mb-4">
                  <FiAlertCircle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-red-900">
                    Emergency Support
                  </h3>
                </div>
                <p className="text-red-700 mb-4">
                  For urgent scaffolding needs or safety emergencies, 
                  contact our 24/7 emergency hotline.
                </p>
                <a
                  href="tel:+971581375601"
                  className="btn-primary bg-red-600 hover:bg-red-700 border-red-600"
                >
                  <FiPhone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
