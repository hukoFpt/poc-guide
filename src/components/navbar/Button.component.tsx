const Button = ({
  text,
  onClick,
  isActive,
}: {
  text: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      className={`relative font-aldrich font-bold text-lg pb-1 px-2 w-32 text-center button ${
        isActive ? "text-white border-b border-white button-active" : "text-neutral-400 border-b border-transparent"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
