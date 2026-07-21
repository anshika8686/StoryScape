import React from 'react'
import { FloatingParticles } from '../components/Landing/FloatingParticles'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 bg-slate-950">

        Top Glow
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-yellow-300/5 blur-3xl" />

        {/* Bottom Right Glow */}
        <div className="absolute bottom-10 right-10 h-[250px] w-[250px] rounded-full bg-orange-500/5 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={18} />

      {/* Center Form */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <Outlet />
      </main>

    </div>)
}

export default AuthLayout