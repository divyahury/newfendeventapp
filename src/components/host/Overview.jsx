import React from 'react'
import styles from '../../style'
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";    
import { Button } from "flowbite-react"; 
import { Cards } from '../cards/Cardz';


const Overview = () => {
    return (
        <section className='py-4'>
            <div className="flex mt-4 items-center">
                <Link to={`/`}>
                    <Button className='bg-customPurple' color="purple">
                        <MdAddCircleOutline className='mr-2 h-5 w-5'/>
                        <p className="px-1">Create event </p>
                    </Button>
                </Link>
            </div>
            <div className='my-6'>
                <Cards />
            </div>
            <div>
                
            </div>

        </section>
    )
}

export default Overview