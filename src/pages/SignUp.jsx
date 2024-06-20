import { Navbar, Register, Footer } from '../components'
import { registercover } from '../assets'
import styles from "../style"
  
const SignIn = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='hidden md:flex lg:flex row-span-2 w-full h-full'>
          <img src={ registercover } className=''/>
        </div>
        <div className='row-span-2 size-full w-full mx-10 items-center justify-center'>
            <Register />
        </div>
      
      </div>
    </div>
  )
}

export default SignIn