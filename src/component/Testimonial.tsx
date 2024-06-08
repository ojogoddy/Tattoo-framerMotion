import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../Variant";
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialData } from '../Data';
const Testimonial:React.FC = () => {
  return (
    <motion.section variants={fadeIn("up")}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }} className='pb-[40px] xl:pb-[160px] xl:pt-0 '>
        <div className="container mx-auto">
            <Swiper>
                {testimonialData.map((slide, index)=>{
                    const {quoteImg, message, name, occupation} = slide;
                    return(
                        <SwiperSlide key={index}>
                            <div className="max-w-[1200px] mx-auto flex flex-col items-center xl:flex-row xl:items-start gap-x-[38px]">
                                <div className="w-[154px] h-[109px] mb-5">
                                    <img src={quoteImg} alt="" />
                                </div>
                                <div className="flex-1 xl:mt-[54px]">
                                    <div className="text-2xl  xl:text-[36px] leading-normal mb-6 xl:mb-5">
                                        {message}
                                    </div>
                                    <div className="flex items-center text-xl xl:text-2xl font-primary">
                                        <div className="font-semibold">{name}</div>
                                        <span className="mx-4"></span>
                                        <div className="font-light">{occupation}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </motion.section>
  )
}

export default Testimonial