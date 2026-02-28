import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.header
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-extrabold mb-4"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-purple-200 max-w-4xl"
          >
            We want to empower you to make the best decisions about the information that you share with us. This Privacy Policy ("Policy") details how Elinity, ("we," "us," or"our") collects, uses, and protects the personaldata of users of Backup Space software,services, and products ("Services"). BackupSpace is a product offered by Elinity.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-sm text-gray-400 mt-4"
          >
            Last updated: February 25, 2025
          </motion.p>
        </motion.header>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Left Side Navigation */}
          <motion.aside
            className="md:w-1/4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <nav>
              <ul>
                <li className="mb-3">
                  <a href="#privacy-policy" className="font-bold text-white border-l-2 border-purple-400 pl-4">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#terms-of-service" className="text-gray-400 hover:text-white pl-4">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#security-compliance" className="text-gray-400 hover:text-white pl-4">
                    Security & Compliance
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#data-processing" className="text-gray-400 hover:text-white pl-4">
                    Data Processing Addendum
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#business-associate" className="text-gray-400 hover:text-white pl-4">
                    Business Associate Agreement
                  </a>
                </li>
              </ul>

              <div className="border-t border-gray-700 my-6"></div>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.print();
                }}
                className="text-gray-400 hover:text-white pl-4"
              >
                Print
              </a>
            </nav>
          </motion.aside>

          {/* Right Side Content */}
          <main className="flex-1 space-y-12">

            {/* Section Wrapper Function */}
            {[
              {
                id: "who-we-are",
                title: "Who are we?",
                content: (
                  <p className="text-gray-300 leading-relaxed">
                    We're Elinity the first ai human connection Platform [CHE-411.148.873] Elinity is a platform that helps people connect deeply, with themselves and with others. At Elinity, we believe that the most important thing in life is who we walk it with. The people we love, create with, grow alongside.
                  </p>
                ),
              },
            ].map((section, index) => (
              <motion.section
                key={index}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="mb-10"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold mb-4"
                >
                  {section.title}
                </motion.h2>
                <motion.div variants={fadeInUp}>
                  {section.content}
                </motion.div>
              </motion.section>
            ))}

            {/* Data Collection */}
            <motion.section
              id="data-collection"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mb-10"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Data Collection
              </motion.h2>

              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-3 text-purple-300">
                Customer-Provided Information
              </motion.h3>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed mb-4">
                We collect personal information from users, including but not limited to:
              </motion.p>

              <motion.ul
                variants={staggerContainer}
                className="list-disc list-inside text-gray-300 space-y-2 mb-6"
              >
                <motion.li variants={fadeInUp}>First and last names</motion.li>
                <motion.li variants={fadeInUp}>Email addresses</motion.li>
              </motion.ul>

              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-3 text-purple-300">
                Personal Information in Content
              </motion.h3>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed mb-4">
                Backup Space provides replication, backup, and data storage services. Certain content that is backed up, stored, or hosted using our Services may contain personal information.
              </motion.p>

              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-3 text-purple-300">
                Session Records
              </motion.h3>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed mb-4">
                To ensure security and maintain service quality, we collect data such as:
              </motion.p>

              <motion.ul
                variants={staggerContainer}
                className="list-disc list-inside text-gray-300 space-y-2 mb-6"
              >
                <motion.li variants={fadeInUp}>Session date and times</motion.li>
                <motion.li variants={fadeInUp}>Browser type</motion.li>
                <motion.li variants={fadeInUp}>Device name and/or identification number</motion.li>
                <motion.li variants={fadeInUp}>Other interactions with the Service</motion.li>
              </motion.ul>

              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-3 text-purple-300">
                Cookies
              </motion.h3>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed">
                We use cookies to enhance your experience, enable certain features, and analyze usage. Cookies store session identifiers but do not store personally identifiable information. Users may configure their browsers to refuse cookies; however, this may limit access to some features of the Service.
              </motion.p>
            </motion.section>

            {/* Data Use */}
            <motion.section
              id="data-use"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mb-10"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Data Use
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed mb-4">
                We do not have any advertising on our site. Any of the information we collect from you may be used in one of the following ways:
              </motion.p>

              <motion.ul
                variants={staggerContainer}
                className="list-disc list-inside text-gray-300 space-y-2"
              >
                <motion.li variants={fadeInUp}>
                  To personalize your experience, i.e., your information helps us to better respond to your individual needs;
                </motion.li>
                <motion.li variants={fadeInUp}>
                  To improve our Services, i.e., we continually strive to improve our service based on the information and feedback we receive from you;
                </motion.li>
                <motion.li variants={fadeInUp}>
                  To improve customer service, i.e., your information helps us to more effectively respond to your support needs.
                </motion.li>
              </motion.ul>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed mt-4">
                Any data that we do have will never be shared except under the circumstances described below in Data Disclosure.
              </motion.p>
            </motion.section>

            {/* Modifications */}
            <motion.section
              id="modifications"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-10"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Modifications to Privacy Policy
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed">
                The Services and our business may change from time to time. As a result, at times it may be necessary for Gmelius to make changes to this Privacy Policy. Gmelius reserves the right to update or modify this Privacy Policy at any time and from time to time. We will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this Site of any material changes to this Privacy Policy. Please review this policy periodically, and especially before you provide any Personal Data. Your continued use of the Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.
              </motion.p>
            </motion.section>

            {/* Applicable Law */}
            <motion.section
              id="applicable-law"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
                Applicable Law
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed">
                This Agreement shall be governed in all respects by the substantive laws of Switzerland. Any controversy, claim, or dispute arising out of or relating to the Agreement shall be subject to the jurisdiction of the competent courts of the Canton of Geneva, the jurisdiction of the Swiss Federal Court being expressly reserved.
              </motion.p>
            </motion.section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;