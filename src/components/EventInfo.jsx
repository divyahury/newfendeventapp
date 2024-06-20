import styles, { layout } from "../style"
import { BriefcaseIcon, MapIcon } from '@heroicons/react/24/solid';
import { eventinfo } from '../constants'

const EventInfo = () =>  (
        <div className={``}>
            {eventinfo.map((info) => (
                <div key={info.id} className={`flex-1 flex flex-col justify-start w-full break-words gap-3`}>
                    <div>
                        <h1 className={` ${styles.heading1} heading-text`}>Description</h1>
                        {/* <p className='font-poppins fonts-normal xs:text-[20px] text-[14px] xs:leading-[25px] leading-[21px]'>{info.date}</p> */}
                    </div>
                    <div className="max-w-[800px]">
                        <h2 className={` ${styles.heading2} heading-text`}>{info.title}</h2>
                        <p className={` ${styles.paragraph}`}>{info.about}</p>
                    </div>
                    <div className="">
                        <h3 className={` ${styles.heading2} heading-text`}>Date and Time</h3>
                        <div className={` ${styles.paragraph}`}>
                         
                            <span>{info.datentime}</span>
                        
                        </div>
                    </div>  
                    <div className="">
                        <h3 className={` ${styles.heading2} heading-text`}>Location</h3>
                        <div className={` ${styles.paragraph}`}>
                        
                            {info.location}
                        </div>
                    </div>
                    <div className="">
                        <h3 className={` ${styles.heading2} heading-text`}>About this event</h3>
                        <p className={` ${styles.paragraph}`}>{info.time}</p>
                    </div>
                    <div className="">
                        <h3 className={` ${styles.heading2} heading-text`}>Organized By:</h3>
                        <p className={` ${styles.paragraph}`}>{info.organizer}</p>
                    </div>
                </div>
            ))}
        </div>
  );


export default EventInfo;
