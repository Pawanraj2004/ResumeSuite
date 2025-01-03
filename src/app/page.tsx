"use client"
import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-gradient-to-b from-blue-50 via-white to-gray-100 px-8 pb-32 text-gray-900 lg:px-12">
      <Hero />
      <Features />
      <Steps />
    </main>
  );
}
