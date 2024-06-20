// import { useState } from 'react';
import React, { useRef, useState } from 'react';

import { Navbar, Footer, Bookings, Profile, Billings, PaymentHistory } from '../components';
import { customersProfile } from '../constants';
import styles from '../style';
import { Link } from 'react-router-dom';

const Account = () => {

    const [click, setClick] = useState(customersProfile[0].title);
    const pRef = useRef(null);

    const handleClick = (custom) => {
        if (click !== custom.title) {
            setClick(custom.title);
            // console.log(custom.title);
        }

    }
    
    const handlClick = (item) => {
        if (click === item.title) {
            setClick(null); // Toggle off if already clicked
        } else {
            setClick(item.title); // Set clicked item title
        }
    };

    const spanStyle = {
        width: pRef.current ? `${pRef.current.offsetWidth}px` : '0', // Set width based on <p> element width
        transition: 'width 0.3s ease', // Add transition for smooth animation
    };

    const showCustom = () => {
        if (click === customersProfile[0].title) {
            return (
                <Bookings />
            )
        }

        else if (click === customersProfile[1].title) {

            return
            (
                <Profile />
            )
        }

        else if (click === customersProfile[2].title) {

            return
            (
                <Billings />
            )
        }

        else if (click === customersProfile[3].title) {

            return
            (
                <PaymentHistory />
            )
        }
    }


    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.paddingX} flex flex-row items-center justify-center`}>
                <div className={`${styles.marginY} row-span-2 size-full`}>
                    <div className="w-full flex items-center">
                        <div className={`${styles.heading2}`}>
                            <h2 className="heading-text">My Tickets</h2>
                        </div>
                        <div className="flex flex-1 text-right items-center justify-end">
                            <div className="bg-white hover:bg-customPurple hover:text-white heading-text px-4 py-2 text-[18px] border-solid border-2 rounded-[10px]  transition-colors w-md">
                                <p>Switch to Host Profile </p>
                            </div>
                           </div>
                    </div>
                    <div className={`${styles.marginY}`}>
                        <ul className="list-none flex items-center flex-1">
                            {customersProfile.map((custom, index) => (
                                <li
                                    key={custom.id}
                                    className={`font-poppins font-normal cursor-pointer text-[14px] pl-[10px] ${index === customersProfile.length - 1 ? 'mr-0' : 'mr-4'
                                        } text-black`}
                                >
                                    <p onClick={() => handleClick(custom)}  >{custom.title}</p>
                                    <span className={ click === custom.title ? "mt-[5px] absolute bow-[50px] h-1 bg-customPurple transform translate-y-full group-hover:translate-y-40 transition-all duration-300":null}></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`${styles.marginY} row-span-2 size-full`}>
                        {customersProfile.map((custom, index) => (

                            <>
                                {click === custom.title ? (
                                    <>
                                      { click ===customersProfile[0].title ? <Bookings /> :null }
                                      { click ===customersProfile[1].title ? <Profile /> :null }
                                      { click ===customersProfile[2].title ? <Billings /> :null }
                                      { click ===customersProfile[3].title ? <PaymentHistory /> :null }
                                    </>
                                ) : null}

                            </>

                        ))}
                    </div>
                </div>
            </div>

            <div className={`${styles.paddingX} bg-purple`}>
                <Footer />
            </div>
        </div>
    );
};

export default Account;