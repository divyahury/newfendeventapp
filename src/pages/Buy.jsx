import { useState, useRef } from "react";
import { Navbar, Footer, PurchaseDetails, OrderSummary } from "../components";
import { eventdetail } from '../assets'
import styles from "../style";
import { ticketTypes } from "../constants";
import { IoArrowBackOutline } from "react-icons/io5";
// import 'flowbite/plugin';
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";


const Buy = () => {

    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`${styles.flexCenter} bg-black-gradient`}>
                <div className={`${styles.boxWidth}`}>
                    <div className={`flex-1 flex ${styles.flexCenter} relative h-[300px]`}>
                        <img src={eventdetail} alt="billing" className='w-[40%] relative z-[1]' />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex lg:flex gap-x-6 items-center justify-center p-4 ">
                <div>
                    <p className="font-semibold">Instruction:</p>
                </div>
                <div className="flex gap-x-2">
                    <p className="font-semibold">Age:</p>
                    <p className="">16+</p>
                </div>
                <div className="flex gap-x-2">
                    <p className="font-semibold">Shoe Type:</p>
                    <p>Not Applicable</p>
                </div>
                <div className="flex gap-x-2">
                    <p className="font-semibold">Age:</p>
                    <p>Not Applicable</p>
                </div>
                <div className="flex gap-x-2">
                    <p className="font-semibold">ID Required:</p>
                    <p>No</p>
                </div>
            </div>

            <div className={`${styles.padding} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className='flex flex-1 text-left items-center justify-start text-[22px]'>
                        <div className='h-full flex cursor-pointer items-center px-2'>
                            <IoArrowBackOutline />
                        </div>
                        <div className={`flex h-full cursor-pointer items-center`}>
                            <p>Back </p>
                        </div>
                    </div>




                    <div className="p-4">
                        {ticketTypes?.map((ticketType, i) => (
                            <div key={i}>
                                <h2 className={`${styles.heading2}`}>{ticketType.title}</h2>
                            </div>
                        ))}
                    </div>
                    {/* Breadcrumb  */}
                    <Breadcrumb aria-label="Default breadcrumb example" className="px-4">
                        <Breadcrumb.Item href="#" icon={HiHome}>
                            Homepage
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Select Ticket</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Payment Info</Breadcrumb.Item>
                    </Breadcrumb>

                </div>
            </div>

            <section className={`${styles.marginX} p-4 flex flex-col md:flex-row lg:flex-row items-start justify-center`}>
                <PurchaseDetails />
                <OrderSummary />
            </section>

            <div className={`${styles.paddingX} bg-purple`}>
                <Footer />
            </div>
        </div>
    )
}

export default Buy