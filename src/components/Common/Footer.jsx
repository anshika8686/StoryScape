
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="text-xl font-semibold text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            StoryScape
          </span>

          <span className="text-xs text-gray-500">
            AI Storytelling
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} StoryScape. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

