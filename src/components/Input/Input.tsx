interface InputFieldProps {
  label: string;
}

const InputField = ({ label }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor="unique-input">{label}</label>
      <input id="unique-input" />
    </div>
  );
};

export default InputField;
