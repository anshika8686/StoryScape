import React from 'react'

const AuthCard = ({title,subtitle,children}) => {
  return (
   <div
  className="
  w-full
  max-w-md
  rounded-3xl
  bg-white/10
  backdrop-blur-3xl
  border
  border-white/20
  p-10
  shadow-2xl
"
>

      <div className="mb-8 text-center">

        <h1
          className="text-4xl font-semibold text-white"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {title}
        </h1>

        <p className="mt-3 text-gray-400">
          {subtitle}
        </p>

      </div>

      {children}

    </div>)
}

export default AuthCard