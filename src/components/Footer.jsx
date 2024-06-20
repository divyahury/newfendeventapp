import styles, { layout } from '../style';
import {logo} from '../assets';
import { footerLinks } from '../constants';

const footer = () => (
  <section className={`${layout.section} ${styles.flexCenter} ${styles.paddingY} flex-col`}>
    
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt='logo' className='w-[266px] h-[72px] object-contain'/>
      </div>
      {footerLinks.map((footerlink) => (
            <div key={footerlink.titleId} className={`${layout.sectionInfo} `}>
              <h1 className={`font-poppins font-semibold xs:text-[20px] sm:${styles.marginY} text-[18px] xs:leading-[20px] leading-[15px]`}>{footerlink.title}</h1>
              {/* <p>{footerlink.links}</p> */}
              <ul className='list-none mt-4'>
                {footerlink.links.map((link, index) => (
                  <li key={link.id} className={`font-poppins font-normal text-16px leading-[24px] text-white hover:text-pink cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul> 
            </div>
      ))}

    </div>
  </section>

)

export default footer