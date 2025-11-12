const Input = ({ title, placeholder, onChange, value, type }) => {
  return (
    <div>
      <label className="mb-2 block text-gray-700">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 w-[520px] rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      />
    </div>
  );
};
export const AddInput = ({ title, placeholder, type }) => {
  return (
    <div className="flex w-full flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-gray-300 px-4 py-3 text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>
  );
};
export const CurriculumInput = ({ type, placeholder }) => (
  <div className="flex flex-col">
    <input
      type={type}
      placeholder={placeholder}
      className={
        "flex h-12 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-0 focus:ring-blue-500 focus:outline-none"
      }
    />
  </div>
);

export default Input;
