import style from "./navBar.module.css";
import { Link, NavLink } from "react-router-dom";

type navBarType = {
  logo: string;
  navList: string[];
  buttonText?: string;
};

const NavBar = (props: navBarType) => {
  const { logo, navList, buttonText } = props;

  // let selected:number | undefined = 1

  return (
    <div className={buttonText ? style.mainHeader : style.mainFooter}>
      <div className={style.logo}>
        <p>{logo}</p>
      </div>
      <nav className={style.mainMenu}>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
              style={({ isActive }) => isActive ? { color: 'rgb(255, 255, 255)'} : {}}
            >
              {navList[0]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              style={({ isActive }) => isActive ? { color: 'rgb(255, 255, 255)' } : {}}
            >
              {navList[1]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/WorkInProgress"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              style={({ isActive }) => isActive ? { color: 'rgb(255, 255, 255)'} : {}}
            >
              {navList[2]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              style={({ isActive }) => isActive ? { color: 'rgb(255, 255, 255)'} : {}}
            >
              {navList[3]}
            </NavLink>
          </li>
        </ul>
      </nav>
      {props.buttonText ? (
        <div className={style.contactButton}>
          <Link to="Contact">
            <button>{buttonText}</button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
