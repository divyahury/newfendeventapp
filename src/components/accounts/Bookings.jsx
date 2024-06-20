import styles from "../../style";
import { IoFilter } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Bookings = () => {
  return (
    <section className="grid grid-row-2">
        <div className="flex flex-cols-2 items-center">
            <div className="w-full flex-1">
                <ul className="list-none flex">
                    <li className={`font-poppins font-normal cursor-point text-[14px] text-black mr-[20px]`}> 
                        Upcoming Events
                    </li>
                    <li className={`font-poppins font-normal cursor-point text-[16px]text-black hover:`}> 
                        Past Events
                    </li>
                </ul>
            </div>
            <div className='flex text-right items-center justify-end'>
                <div className="flex flex-1 bg-customPurple px-4 py-2 text-[18px] border-solid border-2 rounded-xl items-center">
                    <div className={`flex h-full cursor-pointer mr-2`}>
                        <p className="text-dimWhite">Filter </p>
                    </div>
                    <div className='h-full flex cursor-pointer text-dimWhite'>
                    <IoFilter />
                    </div>
                </div>
            </div>
        </div>
        
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
    </section>
  )
}

export default Bookings