
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
}

const StaffLoginCard: React.FC<Props> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/admin-dashboard");
    } else if (username === "staff" && password === "staff123") {
      navigate("/staff-dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className="relative flex w-[90%] max-w-4xl h-[420px] rounded-2xl shadow-2xl overflow-hidden bg-white"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500 z-10"
        aria-label="Close login card"
      >
        ×
      </button>

      {/* Left 40% - Login Form */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -40, opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.6 }}
        className="w-2/5 bg-white p-8 flex flex-col justify-center gap-5"
      >
        <h3 className="text-2xl font-bold text-[#00FA9A] text-center">
          👩‍🏫 Staff Login
        </h3>

        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-[#00FA9A]">
          <FaUserAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Email or Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-[#00FA9A]">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-[#00FA9A] text-black py-2 rounded-md font-semibold hover:bg-[#00c976] transition"
        >
          Sign In
        </button>
      </motion.div>

      {/* Right 60% - Welcome Section */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-3/5 bg-[#00FFFF] text-black p-10 flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold mb-3 animate-pulse">
          Welcome Back, Staff! 👩‍🏫
        </h2>
        <p className="text-lg opacity-90 leading-relaxed">
          Manage students, view your schedule, handle exams, and collaborate
          with other teachers in your personal dashboard. Let’s make a
          difference together!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default StaffLoginCard;


