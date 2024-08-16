import styles from "./styles.module.css";
import Nav from "../../components/Nav";
import Main from "../../components/Main";

function Home() {
  return (
    <div className={styles.home_container}>
      <Nav />
      <Main />
    </div>
  );
}

export default Home;
