import styles from "../style"
import { slider }  from '../assets'
const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img src={slider} alt="billing" className='w-[100%] h-[100%] relative z-[1]'/>
      </div>
    </section>
)


export default Hero