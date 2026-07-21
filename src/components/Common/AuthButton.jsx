function AuthButton({ children, loading }) {
  return (
    <button
      disabled={loading}
      className="
        mt-3
        w-full
        rounded-xl
        bg-gradient-to-r
        from-yellow-300
        to-orange-400
        py-3
        font-semibold
        text-black
        transition
        hover:scale-[1.02]
        active:scale-95
      "
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default AuthButton;