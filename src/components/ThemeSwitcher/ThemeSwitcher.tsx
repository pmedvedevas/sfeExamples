import { useContext } from 'react';
import ThemeContext from '../../containers/ThemeContext.tsx';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
      }}
      onClick={handleClick}
    >
      change theme
    </button>
  );
};

export default ThemeSwitcher;
