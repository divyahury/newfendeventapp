const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    // 16,18,24
    heading1: "font-poppins font-semibold text-[32px] text-black leading-[66px] md:text-[34px] lg:text-[38px] w-full ",
    heading2: "font-ProximaNova font-semibold text-[20px] text-black leading-[46px] md:text-[24px] lg:text-[28px] ",
    paragraph: "font-ProximaNova font-normal text-black text-[18px] leading-[26px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;