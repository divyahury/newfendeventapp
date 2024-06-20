import { Navbar, Footer, EventDetails } from "../components";
import { eventdetail }  from '../assets'
import styles from "../style";

const  EventDetail = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} bg-black-gradient`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex-1 flex ${styles.flexCenter} relative h-[300px]`}>
            <img src={eventdetail} alt="billing" className='w-[40%] relative z-[1]'/>
          </div>
        </div>
      </div>
      
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <EventDetails />
        </div>
      </div> 

      <div className={`${styles.paddingX} bg-purple`}>
        <Footer/>
      </div>
    </div>
  );
};

export default EventDetail
