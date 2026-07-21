import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >

        {/* //NAVAR CONTAINER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-7">

        {/* LOGO */}
        <Link to={"/"}
          className="flex items-center gap-3 group">

          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-yellow-200 to-orange-400 shadow-lg shadow-orange-400/20">
            <Sparkles className="h-5 w-5 text-black" />
          </div>

          <span
            className="text-2xl font-semibold tracking-wide text-white transition duration-300 group-hover:text-yellow-200"
            style={{ fontFamily: "Cormorant Garamond, serif" }}>
            StoryScape
          </span>
        </Link>



        {/* NAVBAR LINKS */}
        <div className="flex items-center gap-10">

          <Link to={"/vision"} className="text-sm uppercase tracking-[0.25em] text-white transition duration-300 hover:text-yellow-200">
            Our Vision
          </Link>

          <Link to={"/signup"} className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-yellow-300 hover:bg-white/10 hover:text-yellow-200" >
            Sign Up
          </Link>

          <Link to={"/login"}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-yellow-300 hover:bg-white/10 hover:text-yellow-200" >
            Login
          </Link>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;