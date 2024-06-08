import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import GallerySection from './component/GallerySection'
import Skills from './component/Skills'
import Testimonial from './component/Testimonial'
import Interview from './component/Interview'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Copyright from './component/Copyright'

const App:React.FC = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header/>
      <Hero/>
      <About/>
      <GallerySection/>
      <Skills/>
      <Testimonial/>
      <Interview/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App