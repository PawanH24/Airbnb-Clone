type SubmitButtonProps = {
  type?: "button" | "submit" | "reset";
  buttonName: string;
};

const SubmitButton = ({ type, buttonName }: SubmitButtonProps) => {
  return (
    <button
      type={type}
      className="border bg-pink-600 text-white rounded-2xl px-22 py-1 cursor-pointer hover:bg-pink-500 transition-all duration-200"
    >
      {buttonName}
    </button>
  );
};
export default SubmitButton;
