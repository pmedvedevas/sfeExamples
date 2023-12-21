import { Link, Outlet } from 'react-router-dom';
import { REACT_FUNDAMENTALS_ROUTES } from '../../constants.ts';
import { useContext } from 'react';
import ThemeContext from '../../containers/ThemeContext.tsx';

const ReactFundamentals = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="lecture-container">
      <h1>React Fundamentals</h1>
      <div className="lecture-content">
        <nav className="lecture-navigation">
          <h2>Examples</h2>
          <Link to={REACT_FUNDAMENTALS_ROUTES.BasicButton}>Basic Button</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.FormInput}>Form Input</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.ToggleButton}>Toggle Button</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.ConditionalContainer}>Conditional Container</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.List}>List example</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.Event}>Event example</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.Counter}>Counter</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.ControlledInput}>Controlled Input</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.ColorBox}>Color Box</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.ScrollListener}>Scroll Listener Example</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.IntervalCounter}>Interval Counter</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.RefCounter}>Ref Counter</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.RefForm}>Ref Form</Link>
          <Link to={REACT_FUNDAMENTALS_ROUTES.RefExample}>Ref Example</Link>
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
