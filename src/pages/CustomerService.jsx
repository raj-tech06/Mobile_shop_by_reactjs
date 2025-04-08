import { motion } from "framer-motion";

function CustomerServicePage() {
  return (
    <div className="customer-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="customer-title"
      >
        Customer Service
      </motion.h1>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="customer-card"
      >
        <h2 className="customer-subtitle">Contact Us</h2>
        <p className="customer-text">Have questions? We’re here to help! Reach out to our support team.</p>
        <p className="customer-text">Email: support@company.com</p>
        <p className="customer-text">Phone: +1 (555) 123-4567</p>
        <p className="customer-text">Working Hours: Mon - Fri, 9am - 6pm</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="customer-card"
      >
        <h2 className="customer-subtitle">FAQs</h2>
        <ul className="customer-faqs">
          <li><strong>How do I track my order?</strong> You can track your order using the tracking link sent to your email.</li>
          <li><strong>What is your return policy?</strong> We offer a 30-day return policy for unused items in original condition.</li>
          <li><strong>Can I change my delivery address?</strong> Yes, contact support within 12 hours of placing the order.</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="customer-card"
      >
        <h2 className="customer-subtitle">Submit a Request</h2>
        <form className="customer-form">
          <input type="text" placeholder="Your Name" className="customer-input" />
          <input type="email" placeholder="Your Email" className="customer-input" />
          <textarea rows="4" placeholder="Your Message" className="customer-textarea"></textarea>
          <button type="submit" className="customer-button">Send Message</button>
        </form>
      </motion.section>
    </div>
  );
}

export default CustomerServicePage;