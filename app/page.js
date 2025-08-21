"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailsPanel from "../components/DetailsPanel";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Suspense } from "react";

const ModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 mx-auto max-w-6xl px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-orange-500 via-pink-500 to-indigo-900"
            style={{ height: 520 }}
          >
            <Suspense
              fallback={
                <div className="grid place-items-center h-full text-white/70">
                  Loading 3D…
                </div>
              }
            >
              <ModelViewer />
            </Suspense>
          </motion.div>

          <div className="lg:col-span-5">
            <DetailsPanel />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
