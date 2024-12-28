"use client";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Easy Resume Building",
    text: "Create your resume effortlessly with our intuitive interface, designed to guide you step-by-step through the process of crafting a professional resume.",
  },
  {
    title: "Resume Parser Available",
    text: "Automatically extract and structure your professional details with our built-in resume parser, saving you time and ensuring accuracy.",
  },
  {
    title: "User-Friendly",
    text: "Experience a seamless and enjoyable user interface, tailored to make resume building straightforward for everyone, regardless of technical skills.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-800">Features</h1>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {FEATURES.map(({ title, text }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-md w-72 h-60"
            >
              
              <dt className="text-xl font-bold text-gray-800">{title}</dt>
              <dd className="mt-2 text-gray-600 text-center">{text}</dd>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
