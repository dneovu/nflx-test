interface QuantityButtonProps {
  text: string;
  onClick: () => void;
}

const QuantityButton = ({ text, onClick }: QuantityButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-light-accent flex size-7 cursor-pointer items-center justify-center rounded-full text-3xl text-white select-none"
    >
      {text}
    </button>
  );
};

export default QuantityButton;
