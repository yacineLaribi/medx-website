import Image from 'next/image';

import { motion } from "framer-motion";

export default function Bottom() {

  const setSection = (section: number) => {
    // Basic implementation since we don't have the context of the parent component
    window.location.hash = section === 5 ? "#about-us" : "#";
  };

  return (
    <div id="about-us" className="w-full h-full px-8 py-12 lg:px-20 lg:py-14 flex flex-col lg:justify-between bg-[#071952] z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .2, duration: .6, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start gap-2">
        
          <p className="font-display uppercase text-[#F4F6FF] text-[30px] lg:text-[60px]">Who are we</p>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center mt-4 lg:mt-6 gap-6 lg:gap-20">
          <div className="w-[250px] h-[250px] overflow-hidden"  >
            <img src="/medx/zenith-logo.png" className="w-full h-full object-cover object-center" />

          </div>

          <div className="h-[250px] w-px bg-[#F4F6FF] hidden lg:inline" />
          <div className="w-[250px] h-px bg-[#F4F6FF] lg:hidden" />

          <div className="flex flex-col gap-2 lg:gap-0">
            <p className="text-[18px] lg:text-[40px] font-display text-[#F4F6FF]">ZENITH SCIENTIFIC CLUB</p>
            <p className="text-[10px] lg:text-[20px] font-display text-[#F4F6FF] lg:max-w-[650px]">
              {` 
              Zenith is a scientific club at the Faculty of Medicine bridging the gap between healthcare and technology to create the doctors of tomorrow.
             `}
            </p>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 mt-4 lg:mt-4">
              <p className="uppercase text-[12px] lg:text-[22px] font-display text-[#F4F6FF]"> <span className="font-display text-[20px] lg:text-[35px] mr-2 text-[#F3C623]">3+</span> Major Events</p>
              <div className="w-[100px] h-px bg-[#F3C623] lg:hidden" />
              <p className="uppercase text-[12px] lg:text-[22px] font-display text-[#F4F6FF]"> <span className="font-display text-[20px] lg:text-[35px] mr-2 text-[#EB8317]">50+</span> Active Members</p>
              <div className="w-[100px] h-px bg-[#F4F6FF] lg:hidden" />
            </div>
          </div>

        </div>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .2, duration: .6, ease: "easeOut" }}
      >
        <div className="w-full pt-10 lg:pt-8">
          <div className="h-px w-full bg-[#F4F6FF] lg:mb-4" />

          <div className="flex gap-10  lg:justify-start lg:gap-20 mb-8 mt-4 lg:mt-0 lg:mb-12">
            <div className="flex flex-col gap-1 lg:gap-2 uppercase font-display text-[#F4F6FF] font-bold text-[7px] lg:text-[12px]">
              <a href="https://facmed.univ-oran1.dz/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">FACULTY OF MEDICINE ORAN</a>
              <a href="mailto:club.zenith.med@gmail.com" className="cursor-pointer hover:underline">club.zenith.med@gmail.com</a>
            </div>
            <div className="flex flex-col gap-1 lg:gap-2 uppercase font-display text-[#F4F6FF] font-bold text-[7px] lg:text-[12px]">
              <button className="cursor-pointer hover:underline text-left">WHAT IS MEDX®</button>
              <button className="cursor-pointer hover:underline text-left">ABOUT US</button>
            </div>
            <div className="flex flex-col gap-1 lg:gap-2 uppercase font-display text-[#F4F6FF] font-bold text-[7px] lg:text-[12px]">
              <a href="https://www.facebook.com/profile.php?id=61576368295189" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">FACEBOOK</a>
              <a href="https://www.instagram.com/zenith.med.club/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">INSTAGRAM</a>
              <a href="https://www.linkedin.com/company/108343596/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">LINKEDIN</a>
            </div>
          </div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .2, duration: .6, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <img
              src="/medx/zenith-btm.png"
              className="mt-1 w-[90vw] max-w-[90vw] h-auto object-contain "
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
