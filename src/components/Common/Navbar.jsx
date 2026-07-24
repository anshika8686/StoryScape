import { Link } from "react-router-dom";
import {
  Sparkles,
  User,
  LogOut,
  BookOpen,
  PlusCircle,
} from "lucide-react";
import { useAuth } from "../../hooks/auth.use";


const Navbar = () => {
  const { user, handleLogout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-7">

        {/* Logo */}

        <Link
          to={user ? "/dashboard" : "/"}
          className="group flex items-center gap-3"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-yellow-200 to-orange-400 shadow-lg shadow-orange-400/20">
            <Sparkles className="h-5 w-5 text-black" />
          </div>

          <span
            className="text-2xl font-semibold tracking-wide text-white transition duration-300 group-hover:text-yellow-200"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            StoryScape
          </span>
        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-10 md:flex">

          {user ? (
            <>
              <Link
                to="/stories"
                className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-white transition duration-300 hover:text-yellow-200"
              >
                <BookOpen size={18} />
                My Stories
              </Link>

              <Link
                to="/create-story"
                className="flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-5 py-2.5 text-sm uppercase tracking-[0.18em] text-yellow-200 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-300 hover:text-black"
              >
                <PlusCircle size={18} />
                Create Story
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/vision"
                className="text-sm uppercase tracking-[0.2em] text-white transition duration-300 hover:text-yellow-200"
              >
                Our Vision
              </Link>

              <Link
                to="/login"
                className="text-sm uppercase tracking-[0.2em] text-white transition duration-300 hover:text-yellow-200"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-yellow-300 hover:text-yellow-200"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>

        {/* User */}

        {user && (
          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/40 bg-yellow-300/10 backdrop-blur-sm">
              <User size={18} className="text-yellow-200" />
            </div>

            <div className="hidden lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Welcome
              </p>

              <p className="font-medium text-white">
                {user.username}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-full p-2 text-white transition duration-300 hover:bg-white/10 hover:text-red-400"
            >
              <LogOut size={20} />
            </button>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
