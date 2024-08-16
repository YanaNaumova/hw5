import Spotify from "../assets/icons/g10.svg";
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav_container}>
      <img src={Spotify} alt="spotify" />
    </div>
  );
}

export default Nav;
