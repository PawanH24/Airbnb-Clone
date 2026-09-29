type UploadFieldProps = {
  id: string;
  name: string;
  label: string;
  labelName?: string;
};

const FileUpload = ({ label, labelName, id, name }: UploadFieldProps) => {
  return (
    <div className="m-2 ">
      <label htmlFor={label}>{labelName}</label>
      <input
        id={id}
        name={name}
        type="file"
        className="border border-gray-300 rounded-lg px-2 py-1 text-sm text-gray-400 file:mr-4 file:py-1 file:px-3 file:rounded-md
          file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer file:cursor-pointer"
      />
    </div>
  );
};
export default FileUpload;
