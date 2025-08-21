"use client";
import { motion } from "framer-motion";

export default function DetailsPanel() {
  return (
    <motion.aside
      initial={{ rotateY: 90, opacity: 0, x: 80 }}
      animate={{ rotateY: 0, opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="glass rounded-3xl p-6 md:p-8 perspective"
      style={{ perspective: 1000 }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Phoenix Bird Statue
      </h2>
      <p className="text-white/80 leading-relaxed mb-6">
        Inspired by the mythical phoenix, this collectible bird figurine is a
        symbol of rebirth and power. Crafted with precision and displayed in 3D,
        it’s perfect for collectors and home décor.
      </p>
      <ul className="space-y-2 mb-6 text-white/80">
        <li>• Premium resin material</li>
        <li>• Hand-painted finish</li>
        <li>• Includes display stand</li>
      </ul>
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold">₹4,999</span>
        <motion.a
          id="buy"
          href="#buy"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-2xl bg-brand-500 px-5 py-3 font-medium shadow-lg hover:shadow-brand-500/40 transition-shadow"
        >
          Buy Now
        </motion.a>
      </div>
    </motion.aside>
  );
}
