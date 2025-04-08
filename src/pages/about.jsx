import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-hero"
      >
        <h1 className="about-title">About Our Company</h1>
        <p className="about-subtext">
          We are driven by innovation, fueled by passion, and committed to excellence.
        </p>
      </motion.div>

      {/* Our Mission */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about-section"
      >
        <h2 className="about-heading">Our Mission</h2>
        <p className="about-text">
          To deliver high-quality products that bring real value to our customers. Our mission is to simplify technology and empower people.
        </p>
      </motion.section>

      {/* Our History */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about-section"
      >
        <h2 className="about-heading">Our History</h2>
        <p className="about-text">
          Founded in 2010, we started as a small team with big dreams. Today, we serve clients across the globe and continue to grow.
        </p>
      </motion.section>

      {/* Our Team */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about-section"
      >
        <h2 className="about-heading">Our Team</h2>
        <div className="about-team">
          {[{ name: "Aarav Mehta", role: "CEO" },{ name: "Priya Sharma", role: "CTO" },{ name: "Ravi Desai", role: "Lead Developer" }].map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="team-avatar" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
export default AboutPage;
