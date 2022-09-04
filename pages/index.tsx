// Import's
import ApplicationUI from "./components/ApplicationUI";

// Asset's
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.app}>
      <ApplicationUI></ApplicationUI>
    </div>
  );
};

export default Home;
