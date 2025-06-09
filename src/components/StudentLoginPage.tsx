

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import studentsData, { Student } from '../data/studentsData';  // Adjust path as needed

interface StudentLoginPageProps {
  onClose: () => void;
}

const StudentLoginPage: React.FC<StudentLoginPageProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Find student with matching username and password
    const matchedStudent = studentsData.find(
      (student) => student.username === username && student.password === password
    );

    if (matchedStudent) {
      // Redirect to dashboard with student data in state
      navigate('/student-dashboard', { state: { student: matchedStudent } });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="relative w-[90%] max-w-4xl h-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden flex"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl transition"
      >
        <IoClose />
      </button>

      {/* Left - 40% - Form */}
      <div className="w-2/5 bg-white p-8 flex flex-col justify-center gap-4">
        <h2 className="text-2xl font-bold mb-2">🎒 Student Login</h2>

        <div className="flex items-center border rounded px-3 py-2">
          <FaUserAlt className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Username"
            className="w-full outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex items-center border rounded px-3 py-2">
          <FaLock className="mr-2 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-[#00FA9A] text-white py-2 rounded hover:scale-105 transition duration-300"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>

      {/* Right - 60% - Info/Design */}
      <div className="w-3/5 bg-[#00FA9A] text-white p-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Hello Student 👋</h2>
        <p className="text-lg">
          Enter your student credentials to access your classes, marks, and updates.
        </p>
      </div>
    </motion.div>
  );
};

export default StudentLoginPage;
