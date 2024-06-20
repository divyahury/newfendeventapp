import { Footer, Hero, Navbar, Events} from "../components";
import styles from "../style";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}  bg-purple`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Events />
        </div>
      </div>

      <div className={`${styles.paddingX} bg-purple`}>
        <Footer/>
      </div>
    </div>
  );
};

export default Home