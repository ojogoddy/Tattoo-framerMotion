import React, { useState } from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../Variant'
import { interviewData } from '../Data'
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

const Interview = () => {
    const {title, btntext, btnIcon} = interviewData
    const [isOpen, setOpen] = useState(false)
  return (
    <motion.section variants={fadeIn("up")}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.1 }} className='section bg-dark bg-interview bg-no-repeat bg-cover bg-center xl:h-[812px]'>
        <div className="container mx-auto h-full">
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-col items-start max-w-[880px]">
                    <motion.h3 variants={fadeIn("down")} className=' text-white text-[40px] xl:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8'>
                        {title}
                    </motion.h3>
                    {/* button */}
                    <motion.div variants={fadeIn("down")}>
                        <div className="text-white flex items-center gap-x-5 cursor-pointer hover:opacity-80 transition" onClick={()=> setOpen(true)}>
                            {/* border */}
                            <div className="w-[70px] h-[70px] xl:w-[91px] xl:h-[91px] border border-white/40 rounded-full text-dark p-[5px] xl:p-[8px]">
                                {/* inner */}
                                <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                                    <div className="pl-1">{btnIcon}</div>
                                </div>
                            </div>
                            {/* btn text */}
                            <div className=" font-primary uppercase tracking-[0.1em]">
                                {btntext}
                            </div>
                        </div>
                    </motion.div>
                    {/* modal video */}
                    <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId ="bQ8Me-GKVpo" onClose={()=> setOpen(false)}/>
                </div>
            </div>
        </div>

    </motion.section>
  )
}

export default Interview