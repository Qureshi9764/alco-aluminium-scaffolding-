import React from 'react';
import { Link } from 'react-router-dom';

const InstallationSetup = () => {
  return (
    <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-theme">
      <section className="bg-gradient-to-br from-brand-primary-50 to-brand-accent-50 dark:from-brand-primary-950 dark:to-brand-accent-950 py-16 lg:py-24 transition-theme">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
            Installation & Setup
          </h1>
          <p className="text-lg lg:text-xl text-text-secondary dark:text-text-secondary-dark">
            Certified teams delivering safe, efficient scaffolding erection and dismantling tailored to your site.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us?service=installation" className="btn-primary">Get Installation Quote</Link>
            <a href="tel:+971581375601" className="btn-secondary">Call Now</a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 card">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Scope of Work</h2>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary dark:text-text-secondary-dark">
              <li>Site assessment, access planning, and method statements</li>
              <li>Professional erection and handover checks</li>
              <li>Tagging, barricading, and signage as required</li>
              <li>Scheduled inspections and adjustments</li>
              <li>Safe dismantling and site clearance</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Process</h3>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary dark:text-text-secondary-dark">
              <li>Technical review and mobilization plan.</li>
              <li>On-site safety briefing and setup.</li>
              <li>Erection per plan with quality checks.</li>
              <li>Final inspection and handover.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Details</h3>
            <div className="space-y-3 text-sm text-text-secondary dark:text-text-secondary-dark">
              <div className="flex justify-between"><span>Teams</span><span>Certified crews</span></div>
              <div className="flex justify-between"><span>Compliance</span><span>UAE standards</span></div>
              <div className="flex justify-between"><span>Scheduling</span><span>Flexible</span></div>
              <div className="flex justify-between"><span>Pricing</span><span>Project-based</span></div>
            </div>
            <Link to="/contact-us?service=installation" className="btn-primary mt-6 w-full text-center">Request Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstallationSetup;


