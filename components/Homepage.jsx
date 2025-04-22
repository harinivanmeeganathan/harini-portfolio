"use client";
import { Typewriter } from "react-simple-typewriter";
import WaveTop from "./WaveTop";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden
       bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 relative pt-0">
    

      {/* Top wave divider */}
      <WaveTop />

      {/* SVG background overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Light mode SVG */}
        <img
          src="/bg-logo-svg.svg"
          alt="background logo"
          className="object-contain w-full h-full opacity-10 dark:hidden"
        />
        {/* Dark mode SVG */}
        <img
          src="/bg-logo-svg-dark.svg"
          alt="background logo dark"
          className="object-contain w-full h-full opacity-10 hidden dark:block"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-black dark:text-white drop-shadow-md">
          Harini Vanmeeganathan Lakshmi
        </h1>
        <h2 className="text-lg sm:text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-8">
          <span className="font-semibold">
            <Typewriter
              words={[
                "Machine Learning Engineer",
                "Data Scientist",
                "NLP Enthusiast",
                "AI Engineer",
                "Full Stack Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
      </div>
    </section>
  );
}
