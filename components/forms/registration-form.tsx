import SubmitButton from "../common/button/submit-button";
import FileUpload from "../common/input/file-upload";
import InputField from "../common/input/input-field";

const RegistationForm = () => {
  return (
    <form className="flex flex-col items-center ">
      <div>
        <InputField
          label="fullname"
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <InputField
          label="email"
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <InputField
          label="password"
          id="password"
          name="password"
          type="text"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <InputField
          label="password confirmation"
          id="password confirmation"
          name="password confirmation"
          type="text"
          placeholder="Enter your password again"
        />
      </div>
      <div>
        <InputField
          label="phone"
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="">
        <FileUpload
          id="profile_image"
          name="profile_image"
          label="profile_image"
        />
      </div>
      <div className="flex">
        <InputField
          label="role"
          id="role"
          name="role"
          type="radio"
          labelName="User"
        />
        <InputField
          label="role"
          id="role"
          name="role"
          type="radio"
          labelName="Host"
        />
      </div>
      <div className="flex justify-center">
        <SubmitButton type="submit" buttonName="Create Account" />
      </div>
    </form>
  );
};
export default RegistationForm;
