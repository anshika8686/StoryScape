import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { FloatingParticles } from "./FloatingParticles";
import { CTAButtons } from "./CTAButtons";
import Navbar from "../Navbar";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* //whole Background */}
      <Navbar/>
      <HeroBackground />
      <FloatingParticles />

      {/* Content */}
      {/* 45% for content and 55% for rest content */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 lg:grid-cols-[45%_55%] ">
        
        {/* LEFT */}
        <div className="flex flex-col justify-between px-6 py-10 sm:px-2 lg:py-14">
          
          {/* Headline */}
          <div className="max-w-2xl py-35">

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: "Cormorant Garamond,serif" }}>
              
              Stories shouldn't{" "}
              <span className="bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text text-transparent italic" style={{ fontFamily: "Cormorant Garamond,serif" }}>
                stay on paper.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 max-w-md text-lg leading-relaxed text-yellow-100"
            >
              Transform your story into an immersive cinematic experience 
            </motion.p>

            <CTAButtons />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-25 max-w-md text-sm leading-relaxed text-gray-500"
            >
              ✨ No design skills required • AI-powered • Create in seconds
            </motion.p>
           
          </div>

          {/* Footer
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-1 text-sm text-gray-400"
          >
            
  
          </motion.div> */}
        </div>

        {/* Right Empty */}
        <div className="hidden lg:block"></div>

      </div>
    </section>
  );
}

export default Hero;