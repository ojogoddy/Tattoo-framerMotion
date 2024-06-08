import React from 'react'
import { navData } from '../Data'

const Nav:React.FC = () => {
    const {items} = navData
  return (
    <nav>
        <ul className='flex gap-x-[58px]'>
            {items.map((item, index)=>{
                return (
                    <li key={index}>
                        <a href={item.href} className=" link hover:border-b-2 hover:border-dark transition duration-300">
                            {item.name}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav