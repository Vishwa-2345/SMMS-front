

import React from 'react';
import { motion } from 'framer-motion';

interface LoginProps {
  onStaffLogin: () => void;
  onStudentLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onStaffLogin, onStudentLogin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex w-[90%] max-w-4xl h-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Left - 60% */}
      <div className="w-3/5 bg-[#00FA9A] text-black p-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Welcome Back 🎓</h2>
        <p className="text-lg">
          Please choose your role to access the school portal. We’re glad to have you here!
        </p>
      </div>

      {/* Right - 40% */}
      <div className="w-2/5 bg-white flex flex-col items-center justify-center gap-4 p-6">
        <button
          onClick={onStaffLogin}
          className="w-full border border-[#00FA9A] text-[#00FA9A] hover:bg-[#00FA9A] hover:text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          👨‍🏫 Staff Login
        </button>

        <button
          onClick={onStudentLogin}
          className="w-full border border-[#00FA9A] text-[#00FA9A] hover:bg-[#00FA9A] hover:text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          🎒 Student Login
        </button>
      </div>
    </motion.div>
  );
};

export default Login;


