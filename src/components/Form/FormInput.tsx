import Form from './Form.tsx';
import InputField from '../Input';

const FormInput = () => {
  const handleSubmit = () => {
    console.log('Submitted!');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputField label="form input" />
      </Form>
    </div>
  );
};

export default FormInput;
