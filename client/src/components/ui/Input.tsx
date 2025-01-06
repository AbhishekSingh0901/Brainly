function Input({
  placeholder,
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
}) {
  return (
    <input
      ref={inputRef}
      placeholder={placeholder}
      type="text"
      className="border text-sm border-gray-200 p-2 rounded-md w-full"
    />
  );
}
export default Input;
