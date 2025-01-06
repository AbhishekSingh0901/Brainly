export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  isForm: boolean;
  text: string | React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const variantClasses = {
  primary: "bg-indigo-700 text-white",
  secondary: "bg-indigo-100 text-indigo-700",
};

function Button(props: ButtonProps) {
  const { variant, text, startIcon, endIcon, className, isForm, ...rest } =
    props;
  return (
    <button
      className={`${variantClasses[variant]} px-4 py-2 flex items-center justify-center rounded-md gap-2 font-light tracking-wide ${className}`}
      {...rest}
    >
      {startIcon}{" "}
      <p className={` ${isForm ? "" : "hidden md:inline-block"} `}>{text}</p>
      {endIcon}
    </button>
  );
}

export default Button;
