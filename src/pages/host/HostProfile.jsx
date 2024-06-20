import React from 'react';
import { Navbar, Sidebar, Footer, CurrencyCard, ProfileCards, Header } from '../../components';
import styles from '../../style';

const HostProfile = () => {

  // Example dataset for CurrencyCard
  const currencyDataset = [
    { title: "GBP", amount: "£110,000" },
    { title: "Sales", amount: "2,000,000" },
    { title: "Paid Out", amount: "1,000,000" },
    { title: "Availble Balance", amount: "₦900" }

    // Add more data as needed
  ];

  const ProfileCard = [
    {
     infotitle: "Personal Information",
     infodata: [
       {title: "Name", data: "John Doe"},
       {title: "Phone NUmber", data: "+234 800 800 8000"},
       {title: "Email", data: "Johndoe@event.com"},
     ]
    },
    {
      infotitle: "Event Host Information",
      infodata: [
        {title: "Description", data: "d seeing smiles all around! One of the best ways to make life easier build confidence for the little ones. Getting the kids involved with easier recipes keeps them busy and gives th="},
        {title: "Event website link", data: "https://mikejude.ticketsir.com"},
        {title: "Facebook", data: "https://facebook.com/mikejude"},
        {title: "X", data: "https://x.com/mikejude"},
        {title: "Instagram", data: "https://instagram.com/mikejude"}
      ]
    },
    {
      infotitle: "Account information",
      infodata: [
        {title: "Currency", data:"NGN"},
        {title: "Country", data: "Nigeria"},
        {title: "Bank Name", data: "Access Bank"},
        {title: "Account Name", data: "Toluwani"},
        {title: "Account Number", data: "0107243075"},
        {title: "IBAN", data: "Nil"},
        {title: "BIC SWIFT", data: "Nil"}
      ]
    }
  ]

  const headername = {name: "Profile"}
  return (
    <section className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-purple w-full `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* <SidebarProvider /> */}
      <section className='gap-x-1 w-full flex flex-auto mr-14 md:mr-0 lg:mr-0'>
        <Sidebar />
        <div className='w-full justify-center p-6 ml-0'>
          <Header headername={headername}/>

          <div className='my-4'>
            <CurrencyCard dataset={currencyDataset} />
          </div>
          <div className='my-4'>
            <ProfileCards Profiles={ProfileCard} />
          </div>
        </div>
      </section>
      <div className={`${styles.paddingX} bg-purple`}>
        <Footer />
      </div>



    </section>
  )
}

export default HostProfile