import styles from "../styles/Main.module.css";
import WastedOnTheLiving from "../components/WastedOnTheLiving";
import Btn from "../components/Btn";

function Main() {
  return (
    <div className={styles.main_container}>
      <WastedOnTheLiving />
      <Btn />
    </div>
  );
}

export default Main;
