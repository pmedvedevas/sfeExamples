import { Link, Outlet } from 'react-router-dom';
import { REACT_ADVANCED_ROUTES } from '../../constants.ts';
import { useContext } from 'react';
import ThemeContext from '../../containers/ThemeContext.tsx';

const ReactFundamentals = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="lecture-container">
      <h1>React Advanced</h1>
      <div className="lecture-content">
        <nav className="lecture-navigation">
          <h2>Examples</h2>
          <Link to={REACT_ADVANCED_ROUTES.StatusBar}>Status Bar</Link>
          <Link to={REACT_ADVANCED_ROUTES.ActivityBar}>Activity Bar</Link>
          <Link to={REACT_ADVANCED_ROUTES.ErrorWhileRendering}>Error while Rendering</Link>
          <Link to={REACT_ADVANCED_ROUTES.ErrorInEventHandler}>Error in Event Handler</Link>
          <Link to={REACT_ADVANCED_ROUTES.ThemeSwitch}>Theme Switch</Link>
          <Link to={REACT_ADVANCED_ROUTES.ThemeResponsiveButton}>Theme-responsive Button</Link>
        </nav>
        <section className="lecture-content-preview-container">
          <h2>Preview</h2>
          <div className={`preview ${theme}`}>
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReactFundamentals;
