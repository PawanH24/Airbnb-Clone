type UploadFieldProps = {
  id: string;
  name: string;
  label?: string;
};

const FileUpload = ({ label, id, name }: UploadFieldProps) => {
  return (
    <div className="m-2 ">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="file" />
    </div>
  );
};
export default FileUpload;
