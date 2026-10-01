import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  id: string;
  name: Path<T>;
  type?: "text" | "radio" | "password";
  placeholder?: string;
  label?: string;
  register: UseFormRegister<T>;
};

function InputField<T extends FieldValues>({
  id,
  name,
  type,
  placeholder,
  label,
  register,
}: InputFieldProps<T>) {
  return (
    <div className="m-2 ">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg mx-1 px-2 py-1"
      />
    </div>
  );
}
export default InputField;
