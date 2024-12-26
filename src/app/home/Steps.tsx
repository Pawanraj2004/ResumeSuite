"use client";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Add your resume", text: "or fill out the form" },
  { title: "Choose Templates", text: "Customize with live changes" },
  { title: "Download your resume", text: "Get your professional resume instantly" },
];

export const Steps = () => {
  return (
    <section className="mx-auto mt-8 max-w-xl rounded-2xl bg-sky-50 px-8 pb-12 pt-10 lg:mt-2">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-extrabold text-gray-800"
      >
      Steps
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 flex flex-col gap-y-12"
      >
        {STEPS.map(({ title, text }, idx) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={idx}
            className="relative flex items-start gap-4"
          >
            <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg">
              <span className="text-xl font-bold">{idx + 1}</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
