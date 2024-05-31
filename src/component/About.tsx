import React from 'react'
import { aboutData } from '../Data'
import {motion } from "framer-motion"
import { fadeIn } from '../Variant'

const About:React.FC = () => {
    const {title, subtitle, subtitle2, btnText, btnIcon} = aboutData
  return (
    <section className='xl:py-16 xl:pb-[160px] bg-gray-100 '>
        <div className="container mx-auto">
            <div className="flex xl:flex-row flex-col gap-x-[10px] items-center">
                {/* numbers */}
                <motion.div variants={fadeIn("right")} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-col xl:flex-row flex-1'>
                    <div className=" text-[260px] xl:text-[520px] leading-none font-tertiary xl:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
                        06
                    </div>
                </motion.div>
                {/* text */}
                <motion.div variants={fadeIn("left")} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className='flex-1 h-full xl:mt-48'>
                    <h2 className="h2">{title}</h2>
                    <div className="flex flex-col items-end">
                        <div className=" text-grey">
                            <p className="mb-6">{subtitle}</p>
                            <p className="mb-9">{subtitle2}</p>
                            <button className='btn btn-lg btn-link'>
                                <a href="/about">{btnText}</a>
                                <div className="text-xl">{btnIcon}</div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default About