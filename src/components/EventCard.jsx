import { Link } from "react-router-dom"


const EventCard = ({img, title, date, location, price, publisher}) => (
    <div className='flex justify-between flex-col py-3 max-w-[300px] md:mr-5 mr-0 my-4 cursor-pointer card'>
        <img src={img} alt='event_img' className='w-[512px] h-[160px] rounded-[10px] object-contain'/>
        <Link to={`/eventdetail`}>
            <div className='grid grid-row-5 px-4 py-4'>
                <h4 className='font-poppins font-semibold text-[18px] leading-[22px] text-black my-1'>{title}
                </h4>
                <p className='font-poppins font-normal text-[14px] text-black  my-1'>
                {date}
                </p>
                <p className='font-poppins font-normal text-[14px] leading-[32px] text-black'>
                {location}
                </p>
                <h4 className='font-poppins font-semibold text-[16px] leading-[32px] text-black'>
                    {price}
                </h4>
                <p className='font-poppins font-normal text-[16px] leading-[14px] text-black'>{publisher}</p>
            </div>
        </Link>
    </div>
)

export default EventCard