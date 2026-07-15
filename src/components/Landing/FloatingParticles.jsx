import { motion } from "framer-motion";

export function FloatingParticles({ count = 14 }) {
  const particles = Array.from({ length: count });

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i % 7) * 0.6;
        const duration = 9 + (i % 5);
        const size = 2 + (i % 3);

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-orange-300"
            style={{
              left: `${left}%`,
              bottom: "-20px",
              width: `${size * 2}px`,
              height: `${size * 2}px`,
              boxShadow: "0 0 12px rgba(251,146,60,0.9)",
            }}
            initial={{
              y: 0,
              opacity: 0,
            }}
            animate={{
              y: "-110vh",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}