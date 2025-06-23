import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg text-purple-200 max-w-4xl">
            We want to empower you to make the best decisions about the information that you share with us. This Privacy Policy ("Policy") details how Elinity, ("we," "us," or"our") collects, uses, and protects the personaldata of users of Backup Space software,services, and products ("Services"). BackupSpace is a product offered by Elinity.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: February 25, 2025</p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side Navigation */}
          <aside className="md:w-1/4">
            <nav>
              <ul>
                <li className="mb-3"><a href="#privacy-policy" className="font-bold text-white border-l-2 border-purple-400 pl-4">Privacy Policy</a></li>
                <li className="mb-3"><a href="#terms-of-service" className="text-gray-400 hover:text-white pl-4">Terms of Service</a></li>
                <li className="mb-3"><a href="#security-compliance" className="text-gray-400 hover:text-white pl-4">Security & Compliance</a></li>
                <li className="mb-3"><a href="#data-processing" className="text-gray-400 hover:text-white pl-4">Data Processing Addendum</a></li>
                <li className="mb-3"><a href="#business-associate" className="text-gray-400 hover:text-white pl-4">Business Associate Agreement</a></li>
              </ul>
              <div className="border-t border-gray-700 my-6"></div>
              <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} className="text-gray-400 hover:text-white pl-4">Print</a>
            </nav>
          </aside>

          {/* Right Side Content */}
          <main className="flex-1">
            <section id="who-we-are" className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Who are we?</h2>
              <p className="text-gray-300 leading-relaxed">
                We're Elinity the first ai human connection Platform [CHE-411.148.873] Elinity is a platform that helps people connect deeply, with themselves and with others. At Elinity, we believe that the most important thing in life is who we walk it with. The people we love, create with, grow alongside.
              </p>
            </section>

            <section id="data-collection" className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Data Collection</h2>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Customer-Provided Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect personal information from users, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>First and last names</li>
                <li>Email addresses</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Personal Information in Content</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Backup Space provides replication, backup, and data storage services. Certain content that is backed up, stored, or hosted using our Services may contain personal information.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-purple-300">Session Records</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                To ensure security and maintain service quality, we collect data such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Session date and times</li>
                <li>Browser type</li>
                <li>Device name and/or identification number</li>
                <li>Other interactions with the Service</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-purple-300">Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                We use cookies to enhance your experience, enable certain features, and analyze usage. Cookies store session identifiers but do not store personally identifiable information. Users may configure their browsers to refuse cookies; however, this may limit access to some features of the Service.
              </p>
            </section>

            <section id="data-use" className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Data Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not have any advertising on our site. Any of the information we collect from you may be used in one of the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To personalize your experience, i.e., your information helps us to better respond to your individual needs;</li>
                <li>To improve our Services, i.e., we continually strive to improve our service based on the information and feedback we receive from you;</li>
                <li>To improve customer service, i.e., your information helps us to more effectively respond to your support needs.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Any data that we do have will never be shared except under the circumstances described below in Data Disclosure.
              </p>
            </section>

            <section id="modifications" className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Modifications to Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                The Services and our business may change from time to time. As a result, at times it may be necessary for Gmelius to make changes to this Privacy Policy. Gmelius reserves the right to update or modify this Privacy Policy at any time and from time to time. We will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this Site of any material changes to this Privacy Policy. Please review this policy periodically, and especially before you provide any Personal Data. Your continued use of the Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.
              </p>
            </section>

            <section id="applicable-law">
              <h2 className="text-3xl font-bold mb-4">Applicable Law</h2>
              <p className="text-gray-300 leading-relaxed">
                This Agreement shall be governed in all respects by the substantive laws of Switzerland. Any controversy, claim, or dispute arising out of or relating to the Agreement shall be subject to the jurisdiction of the competent courts of the Canton of Geneva, the jurisdiction of the Swiss Federal Court being expressly reserved.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 