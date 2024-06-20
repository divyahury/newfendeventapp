import React, { useContext, useState } from 'react'
//import link 
import { Link } from 'react-router-dom'
// import Icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi';
// import components
// import  Sidenav  from '../../components';
// import SidebarContext  from './SidebarContext';

//new imports
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { TbFileAnalytics } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {

    // const {isOpen, handleClose } = useContext(SidebarContext)

    const menus = [
        { name: "Dashboard", link: "/host/dashboard", icon: MdOutlineDashboard },
        { name: "Orders", link: "/host/orders", icon: FaListUl },
        { name: "Events", link: "/host/myevents", icon: SlCalender },
        { name: "Financials", link:"/host/financials", icon: TbFileAnalytics },
        { name: "Profile", link: "/host/profile", icon: FaUserAlt },
        { name: "Sign out", link: "/signout", icon: FaSignOutAlt },

    ]

    const [open, setOpen] = useState(false);

    return (
        <div className={`bg-secondarycolor min-h-screen ${open ? 'w-60' : 'w-16'} heading-text px-3 duration-500`}>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)}/>
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menus?.map((menu, i) => (
                    <Link to={menu?.link} key={i} className='flex items-center text-lg gap-3.5 font-meduim p-2 hover:text-white hover:bg-customPurple  rounded-md'>
                        <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                        <h2 style={{transitionDelay: `${i + 1}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                        <h2 className={`${open && "hidden"} absolute left-48 bg-black font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar

