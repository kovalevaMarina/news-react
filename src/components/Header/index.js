import './main.scss';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <div className="logo">
            <Link className="logo-link" to={'/'}>
              in<span className="logo-link__dot txt--blue">.</span>news
            </Link>
          </div>
          <nav>
            <ul className="menu-list">
              <NavLink
                activeclassname="active"
                className="menu-list__item"
                to={'/news'}
              >
                News
              </NavLink>
              <NavLink
                activeclassname="active"
                className="menu-list__item"
                to={'/login'}
              >
                Log In
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
