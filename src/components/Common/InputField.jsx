function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm text-gray-300">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          outline-none
          transition
          placeholder:text-gray-500
          focus:border-orange-400
          focus:ring-2
          focus:ring-orange-400/30
        "
      />
    </div>
  );
}

export default InputField;