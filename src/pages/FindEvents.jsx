import { Navbar, Footer, SearchEvents, Events } from "../components";
import styles from "../style";

const FindEvents = () => {
  return (
    <div className="w-full overflow-hidden">  
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>  
        <SearchEvents />
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Events />
            </div>
        </div> 
        
        <div className={`${styles.paddingX} bg-purple`}>
            <Footer/>
        </div>
    </div>
  )
}

export default FindEvents