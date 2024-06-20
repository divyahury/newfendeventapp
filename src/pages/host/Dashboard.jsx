  import React from 'react';
  import { Navbar, Sidebar, Overview, RecordDetails, Footer, Header } from '../../components';
  import styles from '../../style';
 
const Dashboard = () => {

  const tableNames=['Date', 'Name', 'Category', 'Status', 'Action'];
  const tabledata = [ 
     ['12th May-2024', 'Bello', 'Party', 'Live' ],
     ['12th May-2024', 'Yello', 'Convention', 'Online' ],
  ];
  const headername = {name: 'Dashboard'};

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
            <Overview />

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

export default Dashboard

