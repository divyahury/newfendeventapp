import React from 'react';
import { Navbar, Sidebar, RecordDetails, Footer, CurrencyCard, Header } from '../../components';
import styles from '../../style';

const Financial = () => {
    const tableNames=['Date', 'Ticket Name', 'Ticket Quantity', 'Ticket Type' ,'Amount', 'Status', 'Action'];
    const tabledata = [ 
       ['12th May-2024', 'Teamcush', 2, 'VIP', '£30', 'Paid' ],
       ['12th May-2024', 'Burna @ TBS', 5, 'VVIP', '₦1,000,000', 'Paid' ],
    ];

    
    // Example dataset for CurrencyCard
    const currencyDataset = [
        { title: "GBP", amount: "£110,000" },
        { title: "NGN", amount: "₦900" },
        {title: "Sales", amount: "2,000,000"},
        {title: "Paid Out", amount: "1,000,000"}

        // Add more data as needed
    ];

    const headername = { name: "Financials"}

  return (
    <section className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple w-full `}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            {/* <SidebarProvider /> */}
            <section className='gap-x-1 flex flex-auto mr-14 md:mr-0 lg:mr-0'>
                <Sidebar />
                <div className='w-full justify-center p-6 ml-0'>
                    <Header headername={headername} />

                    <div className='my-4'>
                        <CurrencyCard dataset={currencyDataset} />
                    </div>
                    <div className='py-4'>
                        <div>
                            <RecordDetails recordHead={tableNames} recorddata={tabledata} />
                        </div>
                    </div>
                </div>

            </section>
            <div className={`${styles.paddingX} bg-purple`}>
                <Footer />
            </div>



        </section>
  )
}

export default Financial