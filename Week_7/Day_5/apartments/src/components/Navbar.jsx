import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={'Navbar ' + theme}>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      <NavLink to="/apartments/new">
        <button>Add Apartment</button>
      </NavLink>

      <button onClick={toggleTheme}> Turn to {theme === 'light' ? 'dark' : 'light'} mode </button>
    </nav>
  );
}

export default Navbar;
