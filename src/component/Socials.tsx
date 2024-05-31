import React from 'react'
import { socialData } from '../Data'

const Socials:React.FC = () => {
    
  return (
    <ul className='flex justify-center items-center gap-x-[30px]'>
        {socialData.map((item, index)=>{
            return(
                <li key={index}>
                    <a href={item.href} className=' font-primary uppercase'>
                        {item.icon}
                    </a>
                </li>
            )
        })}
    </ul>
  )
}

export default Socials