const Button = ({
  text,
  isActive,
}: {
  text: string;
  isActive: boolean;
}) => {
  return (
    <button
      className={`relative font-bold text-lg pb-1 px-4 text-center button ${
        isActive
          ? "text-white border-b border-white button-active"
          : "text-neutral-400 border-b border-transparent"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
