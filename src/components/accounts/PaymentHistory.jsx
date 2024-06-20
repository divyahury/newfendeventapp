import styles from "../../style";
import { Link } from 'react-router-dom';

const Bookings = () => {
  return (
    <section className="grid grid-row-2">
        
        <div className="grid grid-row-2 items-center justify-center mt-4">
            <div className="flex items-center justify-center">
                <p>You don’t have any payment record</p>
            </div>
            <div className="flex mt-4 items-center justify-center">
                <Link to={`/`}>
                    <div className="bg-customPurple px-4 py-2 text-[18px] border-solid border-2 rounded-xl items-center">
                        <div className={`flex h-full cursor-pointer`}>
                            <p className="text-dimWhite">Browse events </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Bookings