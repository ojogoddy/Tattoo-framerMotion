import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'

const App:React.FC = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App