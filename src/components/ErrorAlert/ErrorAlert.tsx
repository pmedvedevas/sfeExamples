interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return <div>{message}</div>;
};

export default ErrorAlert;
