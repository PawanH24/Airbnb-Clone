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
      <input id={id} name={name} type="file" />
    </div>
  );
};
export default FileUpload;
