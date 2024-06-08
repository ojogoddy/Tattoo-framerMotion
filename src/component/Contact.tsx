import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../Variant'
import { contactData } from '../Data'

const Contact = () => {
    const {title, info, form} = contactData
  return (
    <section className='section bg-gray-100'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-y-16">
                {/* text */}
                <motion.div variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1">
                {/* title */}
                <h2 className="h2 max-w-[490px]">{title}</h2>
                {/* info items */}
                <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
                    {info.map((item, index)=>{
                        //destructure item
                        const {title, subtitle, address, phone, email, link} = item;
                        return(
                            <div key={index}>
                                <div className="font-primary uppercase font-medium text-xl mb-3">{title}</div>
                                <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">{subtitle}</div>
                                <div className="flex flex-col gap-y-3 mb-8">
                                    <div className="flex items-center gap-[10px]">
                                        <div>{address.icon}</div> 
                                        <div>{address.name}</div> 
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div>{phone.icon}</div> 
                                        <div>{phone.number}</div> 
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <div>{email.icon}</div> 
                                        <div>{email.address}</div> 
                                    </div>
                                </div>
                                <a href="/" className="font-medium border-b border-dark pb-[5px]">{link}</a>
                            </div>
                        )
                    })}
                </div>
                </motion.div>
                {/* form */}
                <motion.div  variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center
            ">
                <form className=' flex flex-col gap-y-10 w-full '>
                    <input className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-gray-100" type="text" placeholder={form.name} />
                    <input className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-gray-100" type="text" placeholder={form.email} />
                    <input className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-gray-100" type="text" placeholder={form.message} />
                    <button className="self-start btn btn-sm btn-dark">
                        {form.btnText}
                    </button>
                </form>

                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Contact