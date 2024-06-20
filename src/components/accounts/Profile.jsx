import React from 'react'
import styles from '../../style'
import Button from '../Button';
import { ProfileHolder } from '../';

const Profile = () => {
    // const initials = username ? username.charAt(0).toUpperCase() : '';

    return (

        <section className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 border-2 border-gray-300 rounded-2xl">
            <div className="lg:flex items-center justify-center rounded-lg p-5">
                <ProfileHolder />
                <div className="flex flex-col justify-center items-center md:items-start"> {/* Added 'items-center' for mobile alignment */}
                    <p className={`${styles.paragraph} mt-2 font-semibold text-center md:text-left`}>John Doe</p> {/* Center text on mobile */}
                    <p className={`${styles.paragraph} my-4 text-center md:text-left`}>johndoe@gmail.com</p> {/* Center text on mobile */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto"> {/* Center buttons on mobile */}
                        <button className="btn bg-white hover:bg-customPurple hover:text-white heading-text px-4 py-2 text-[18px] border-solid border-2 rounded-[10px]  transition-colors w-md mr-2">Edit</button> {/* Used 'btn' utility class for button styling */}
                        <button className="btn bg-white hover:bg-customPurple hover:text-white heading-text px-4 py-2 text-[18px] border-solid border-2 rounded-[10px]  transition-colors w-md">Change Password</button> {/* Used 'btn' utility class for button styling */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start md:items-end"> {/* Center column items on mobile */}
                <button className="btn bg-white hover:bg-customPurple hover:text-white heading-text px-4 py-2 text-[18px] border-solid border-2 rounded-[10px]  transition-colors w-md ">Create your events</button> {/* Used 'btn' utility class for button styling */}
            </div>
        </section>
    )
}

export default Profile