import { Card } from "flowbite-react";
import { MdPublishedWithChanges } from "react-icons/md";
import { TbCalendarCancel } from "react-icons/tb";
import { MdOutlineWarningAmber } from "react-icons/md";
import { Label, Select } from "flowbite-react";

const Eventscard = () => {
    return (
        //Events Card
        <Card className="max-w-lg w-full">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Events</h5>
                <div className="max-w-md">
                    <Select id="countries" required>
                        <option>All</option>
                        <option>7 Days</option>
                        <option>30 Days</option>
                        <option>Past years</option>
                    </Select>
                </div>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-2">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex flex-1 gap-x-1 items-center">
                                <div>
                                    <MdPublishedWithChanges />
                                </div>
                                <div>
                                    <p className="truncate text-md font-semibold text-gray-900 dark:text-white">Published</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex flex-1 gap-x-1 items-center">
                                <div>
                                    <TbCalendarCancel />
                                </div>
                                <div>
                                    <p className="truncate text-md font-semibold text-gray-900 dark:text-white">Cancelled</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $3467
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex flex-1 gap-x-1 items-center">
                                <div>
                                    <MdOutlineWarningAmber />
                                </div>
                                <div>
                                    <p className="truncate text-md font-semibold text-gray-900 dark:text-white">Past</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                        </div>
                    </li>
                </ul>
            </div>
        </Card>
    )
}

export default Eventscard