import Eventscard from "./Eventscard"
import Transactioncard from "./Transactioncard"
import Bookingcard from "./Bookingcard"
import CurrencyCard from "./CurrencyCard"




export const Cards = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
            <div className="w-full">
                <Transactioncard />
            </div>
            <div className="w-full">
                <Eventscard />
            </div>
            <div className="w-full">
                <Bookingcard />
            </div>
        </div>
    )
}

export const Currenciescard = () => {
    return (
        <div className="w-full">
            <CurrencyCard />
        </div>
    )
}

