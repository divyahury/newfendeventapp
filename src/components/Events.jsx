import { event } from '../constants';
import styles from '../style';
import EventCard from './EventCard';
import { IoMdArrowDropright } from "react-icons/io";

// import Button from './Button';

const Events = () => (
    <section id='events' className={`${styles.flexCenter}`}>
      {/* <div className="grid grid-row-span-full">
        <h3>Trending Events</h3>
      </div> */}
      <div className={`${styles.marginY}`}>
        <div className='grid grid-cols-2 max-w-full mb-4 items-center h-full font-poppins font-medium text-[18px] text-pink'>
          <div className={`${styles.heading2}`}>
            Category
          </div>
          <div className='flex flex-1 text-right items-center justify-end'>
            <div className={`flex h-full cursor-pointer items-center`}>
                <p>See More </p>
            </div>
            <div className='h-full flex cursor-pointer items-center'>
                <IoMdArrowDropright />
            </div>
          </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center relative z-[1]'>
          {event.map((event) => (
            <EventCard key={event.id} {...event}/>
          ))}
        </div>

      </div>
    </section>
)

export default Events