function Input({
  onChange,
  placeholder,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="border text-sm border-gray-200 p-2 rounded-md w-full"
      onChange={onChange}
    />
  );
}
export default Input;
