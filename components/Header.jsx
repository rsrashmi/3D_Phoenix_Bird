"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const waves = [
      { amplitude: 10, wavelength: 120, speed: 0.02, color: "#ffffff55" },
      { amplitude: 15, wavelength: 200, speed: 0.015, color: "#ff69b480" },
      { amplitude: 20, wavelength: 300, speed: 0.01, color: "#ffd70066" },
    ];

    let t = 0;

    function drawWave(wave) {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x++) {
        const y =
          Math.sin((x / wave.wavelength + t) * Math.PI * 2) * wave.amplitude +
          canvas.height / 2;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waves.forEach(drawWave);
      t += 0.005;
      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 shadow-xl">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <Image src="/logo.svg" width={32} height={32} alt="Logo" priority />
          <span className="text-lg font-semibold tracking-wide text-white drop-shadow-md">
            Phoenix Bird
          </span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          href="#buy"
          className="rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 px-3 py-1.5 text-sm font-medium shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/50 transition-transform hover:scale-105"
        >
          Buy Now
        </motion.a>
      </div>
    </header>
  );
}
