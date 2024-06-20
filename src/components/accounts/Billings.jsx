import styles from "../../style";
import { Link } from 'react-router-dom';
// import { FiPlus } from 'react-icons/fi';
import { IoIosAddCircleOutline } from "react-icons/io";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Bookings = () => {
  return (
    <section className="grid grid-row-2">
        <div className="grid grid-row-2 items-center justify-center mt-4">
            <div className="flex items-center justify-center">
                <p>You have not booked an event yet</p>
            </div>
            <div className="flex mt-4 items-center justify-center">
                <Link to={`/`}>
                    <div className="bg-customPurple px-4 py-2 text-[18px] border-solid border-2 rounded-xl items-center">
                        <div className={`flex h-full cursor-pointer`}>
                            <p className="text-dimWhite">Book event </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className='flex flex-1 text-left items-center justify-start text-[18px] text-pink mt-6'>
            <div className='h-full flex cursor-pointer items-center mr-1'>
                <IoIosAddCircleOutline />
            </div>
            <div className={`flex h-full cursor-pointer items-center`}>
                <p>Add Payment Card </p>
            </div>
        </div>
    </section>
  )
}

export default Bookings