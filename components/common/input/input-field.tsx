type InputFieldProps = {
  id: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  labelName?: string;
};

const InputField = ({
  id,
  name,
  type,
  value,
  placeholder,
  onChange,
  label,
  labelName,
}: InputFieldProps) => {
  return (
    <div className="m-2 ">
      <label htmlFor={label}>{labelName}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border border-gray-300 rounded-lg mx-1 px-2 py-1"
      />
    </div>
  );
};
export default InputField;
