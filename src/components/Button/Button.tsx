import { useContext } from 'react';
import { ThemeContext } from '../../containers/ThemeContext.tsx';

const Button = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
      }}
    >
      I can access theme value
    </button>
  );
};

export default Button;
