import React from 'react'
import { motion } from 'framer-motion'
import { heroData } from '../Data'
import { fadeIn } from '../Variant'

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
        }
    }
}

const Hero:React.FC = () => {
    const {title, subtitle, btnText, btnIcon} = heroData
  return (
    <section className=' bg-hero bg-cover bg-center min-h-[100vh] xl:h-[948px] bg-no-repeat relative pt-[120px] xl:mt-[150px]'>
        <motion.div variants={container} initial="hidden" whileInView={"show"} className=' container mx-auto min-h-[40vh] xl:h-full flex items-center justify-center xl:justify-end'>
            {/* text & btn */}
            <div className="text-orange-400 text-center xl:text-left xl:max-w-[640px] ">
                <motion.h1 variants={fadeIn("down")} className='h1 '>
                    {title}
                </motion.h1>
                <motion.p variants={fadeIn("down")} className='mb-8 xl:mb-16 max-w-lg leading-relaxed'>
                    {subtitle}
                </motion.p>
                {/* btn */}
                <motion.div variants={fadeIn("down")}>
                    <button className='btn btn-sm xl:btn-lg btn-outline mx-auto xl:mx-0'>
                        <a href="/about">{btnText}</a>
                        <div className="text-xl">{btnIcon}</div>
                    </button>
                </motion.div>
                <div className="hidden xl:flex absolute -bottom-2 right-0 left-28 before:content-outlineText"></div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero