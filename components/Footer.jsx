"use client";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm"
        >
          © {new Date().getFullYear()} Phoenix Bird. All rights reserved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-4 text-lg"
        >
          <a
            href="https://www.facebook.com/"
            className="hover:text-pink-400 transition-colors"
          >
            <FiFacebook size={18} />
          </a>
          <a
            href="https://x.com/"
            className="hover:text-pink-400 transition-colors"
          >
            <FiTwitter size={18} />
          </a>
          <a
            href="https://www.instagram.com/"
            className="hover:text-pink-400 transition-colors"
          >
            <FiInstagram size={18} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
