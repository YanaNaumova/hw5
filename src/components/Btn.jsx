import styles from "../styles/Btn.module.css";
import Google from "../assets/icons/google.svg";
import Xing from "../assets/icons/xing.svg";
import Apple from "../assets/icons/apple.svg";

function Btn() {
  return (
    <div className={styles.btn_container}>
      <a href="https://www/apple.com">
        <img src={Apple} alt="apple" className={styles.apple} />
      </a>
      <img src={Google} alt="google" className={styles.google} />
      <img src={Xing} alt="xing" className={styles.xing} />
    </div>
  );
}

export default Btn;
