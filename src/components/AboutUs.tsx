import React from "react";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto h-full bg-gradient-to-br from-white to-[#f0f8ff] rounded-lg shadow-inner">
      {/* Section Heading */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#4B0082] mb-6 border-b-2 border-[#4B0082] inline-block pb-2"
      >
        About Our School
      </motion.h2>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-4 text-lg text-gray-700 leading-relaxed"
      >
        <p>🏫 Our school was founded with a vision to nurture students with excellence and values. We believe in a balanced approach to education—focusing on academics, sports, arts, and life skills.</p>
        <p>📘 With a team of passionate teachers and a vibrant learning environment, we encourage students to be curious, innovative, and empathetic individuals.</p>
        <p>🏆 The school is equipped with smart classrooms, a rich library, sports facilities, and a safe, supportive space for every student to thrive.</p>
      </motion.div>

      {/* Cards for Strengths */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
      >
        {[
          { label: "Total Students", count: 750, bg: "#FFB6C1" },
          { label: "Total Teachers", count: 45, bg: "#87CEFA" },
          { label: "Boys", count: 400, bg: "#B0E0E6" },
          { label: "Girls", count: 350, bg: "#F08080" },
        ].map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`rounded-xl p-4 text-center shadow-lg text-white font-semibold`}
            style={{ backgroundColor: item.bg }}
          >
            <div className="text-2xl">{item.count}</div>
            <div className="text-sm mt-1">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Table: Fees Details */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-[#4B0082] mb-4">💰 Fees Details</h3>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white text-left border border-gray-200">
            <thead className="bg-[#4B0082] text-white">
              <tr>
                <th className="py-3 px-6">Class</th>
                <th className="py-3 px-6">Annual Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["LKG / UKG", "₹10,000"],
                ["1st - 5th", "₹12,000"],
                ["6th - 8th", "₹15,000"],
                ["9th - 10th", "₹18,000"],
                ["11th - 12th", "₹20,000"],
              ].map(([cls, fee], i) => (
                <motion.tr
                  key={i}
                  whileHover={{ backgroundColor: "#f3f4f6" }}
                  className="border-b last:border-none transition"
                >
                  <td className="py-3 px-6">{cls}</td>
                  <td className="py-3 px-6">{fee}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;


