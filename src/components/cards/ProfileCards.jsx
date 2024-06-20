import { Card } from "flowbite-react";
import { CiEdit } from "react-icons/ci";
import PropTypes from 'prop-types';

const ProfileCards = ({ Profiles }) => {
    return (
        <div className="mb-4">
            {Profiles.map((ProfileCard, index) => (
                <Card key={index} className="w-full mb-4">
                    <div className="flex flex-auto">
                        <div className="items-center">
                            <p className="text-[16px] md:text-[18px] lg:text-[24px] font-semibold">{ProfileCard.infotitle}</p>
                        </div>
                        <div className="flex flex-1  text-right items-center justify-end text-[18px]">
                            <CiEdit />
                            <p>Edit</p>
                        </div>
                    </div>
                    <div className="grid grid-row-2 md:grid-cols-2 lg:grid-cols-2  gap-4 items-center">
                        {ProfileCard.infodata.map((info, idx) => (
                            <div key={idx} className="">
                                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                    {info.title}:
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {info.data}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    )
}   

ProfileCards.propTypes = {
    Profiles: PropTypes.arrayOf(
        PropTypes.shape({
            infotitle: PropTypes.string.isRequired,
            infodata: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    data: PropTypes.string.isRequired,
                })
            ).isRequired,
        })

    ).isRequired,
}

export default ProfileCards