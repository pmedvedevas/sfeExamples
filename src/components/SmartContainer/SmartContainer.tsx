interface SmartContainerProps {
  isLoading?: boolean;
  isError?: boolean;
}

const SmartContainer = ({ isLoading = true, isError = false }: SmartContainerProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred!</div>;
  }

  return <div>Content</div>;
};

export default SmartContainer;
