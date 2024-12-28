"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row lg:h-[825px] lg:justify-center lg:items-center">
      {/* Left side - Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 flex justify-center items-center"
      >
        <motion.img
          src="/logo.png"
          alt="Resume Builder Preview"
          className="w-full max-w-md lg:max-w-lg rounded-lg"
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>

      {/* Right side - Animated Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left lg:w-1/2"
      >
        <motion.h1
          className="text-primary pb-2 text-5xl font-extrabold tracking-tight lg:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Create your
          <br />
          resume
        </motion.h1>
        <Link
          href="/insert"
          className="btn-primary mt-6 lg:mt-14 inline-block rounded-lg bg-primary px-6 py-3 text-white shadow-lg hover:bg-primary-dark"
        >
          Create Resume →
        </Link>
      </motion.div>
    </section>
  );
};
