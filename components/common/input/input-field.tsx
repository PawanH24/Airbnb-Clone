import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  id: string;
  name: Path<T>;
  type?: "text" | "radio" | "password";
  placeholder?: string;
  label?: string;
  register: UseFormRegister<T>;
  error?: string;
};

function InputField<T extends FieldValues>({
  id,
  name,
  type,
  placeholder,
  label,
  register,
  error,
}: InputFieldProps<T>) {
  return (
    <div className=" flex flex-col m-2 ">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`border rounded-lg mx-1 px-2 py-1 ${error ? "border-red-500 focus:outline-red-500" : "border-gray-300 focus:outline-gray-300"}`}
      />
      <small className="text-red-500 pl-2 pt-1">{error}</small>
    </div>
  );
}
export default InputField;
