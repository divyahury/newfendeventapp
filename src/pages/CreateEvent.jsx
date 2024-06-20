import { Navbar, Footer, CreateEvents } from "../components";
import styles from "../style";

const CreateEvent = () => {
  return (
    <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar />
            </div>
        </div>

        <div className={`${styles.paddingX} flex flex-col md:flex-row items-center justify-center`}>
            <div className='row-span-2 size-full w-full mx-10 items-center justify-center'>
                <CreateEvents />
            </div>
        </div>

        <div className={`${styles.paddingX} bg-purple`}>
            <Footer/>
        </div>
    </div>
  )
}

export default CreateEvent