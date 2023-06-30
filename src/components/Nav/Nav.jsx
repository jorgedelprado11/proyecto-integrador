import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.div}>
      <button className={styles.btn}>
        <NavLink className={styles.link} to="/home">Home</NavLink>
      </button>
      <button className={styles.btn}>
        <NavLink className={styles.link} to="/about">About</NavLink>
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
