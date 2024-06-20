import { Card } from "flowbite-react";
import styles from "../../style";


const CurrencyCard = ({ dataset }) => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
            {dataset.map((item, index) => ( 
                <Card key={index} className="max-w-sm w-full">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400"> {item.amount}</p>
                </Card>

            ))}
        </div>
    );
};

export default CurrencyCard;

// import { Card } from "flowbite-react";
// import styles from "../../style";

// const CurrencyCard = ({ dataset }) => {
//     return (
//         <div>
//             {dataset.map((item, index) => (
//                 <Card key={index} className="max-w-lg">
//                     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {item.title}
//                     </h5>
//                     <p className="font-normal text-gray-700 dark:text-gray-400">
//                         {item.amount}
//                     </p>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default CurrencyCard;

