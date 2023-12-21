import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants.ts';

const Header = () => {
  return (
    <header>
      <Link to={ROUTES.ReactFundamentals}>React Fundamentals</Link>
      <Link to={ROUTES.ReactAdvanced}>React Advanced</Link>
    </header>
  );
};

export default Header;
