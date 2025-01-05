export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  text: string | React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { variant, text, startIcon, endIcon, ...rest } = props;
  return (
    <button
      className={`${
        variant === "primary"
          ? " bg-indigo-700 text-white"
          : "bg-indigo-100 text-indigo-700"
      } px-4 py-2 flex items-center justify-center rounded-md gap-2`}
    >
      {startIcon} {text} {endIcon}
    </button>
  );
}

export default Button;
