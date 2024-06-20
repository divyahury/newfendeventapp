import { PiUserSwitchFill } from "react-icons/pi";
import styles from "../../style";

const Header = ({headername}) => {
  return (
    <div className="flex flex-auto">
      <div className={`${styles.heading2}`}>
        <h2 className="heading-text">{headername.name}</h2>
      </div>
      <div className="flex flex-1 text-right items-center justify-end">
        <div className="bg-white hover:bg-customPurple hover:text-white heading-text px-4 py-2 text-[14px] md:text-[16px] lg:text-[18px] border-solid border-2 rounded-[10px] items-center transition-colors w-md hidden sm:flex">
          <p>Switch to Customers Profile </p>
        </div>
        <div className="bg-pink-50 px-4 py-2 transition-colors w-md flex sm:hidden cursor-pointer items-center">
          <PiUserSwitchFill size={30} />
        </div>
      </div>
    </div>
  )
}

export default Header
