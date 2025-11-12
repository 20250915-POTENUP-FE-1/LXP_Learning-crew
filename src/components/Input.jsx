const Input = ({ title, placeholder, onChange, value, type }) => {
  return (
    <div>
      <label className="mb-2 block text-gray-700">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="${externalClass || ''}` h-12 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      />
    </div>
  );
};

export default Input;
