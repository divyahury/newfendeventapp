import { Card } from "flowbite-react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { Label, Select } from "flowbite-react";

const Transactioncard = () => {
  return (
        //Transaction Card
        <Card className="max-w-lg w-full">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Transactions</h5>
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
                                    <FaMoneyBill1Wave />
                                </div>
                                <div>
                                    <p className="truncate text-md font-semibold text-gray-900 dark:text-white">Paid Out</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex flex-1 gap-x-1 items-center">
                                <div>
                                    <GrAnalytics />
                                </div>
                                <div>
                                    <p className="truncate text-md font-semibold text-gray-900 dark:text-white">Sales</p>
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
                                    <IoWalletOutline />
                                </div>
                                <div>
                                    <p className="truncate text-md font-semibold text-gray-900 dark:text-white">Available Balance</p>
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

export default Transactioncard