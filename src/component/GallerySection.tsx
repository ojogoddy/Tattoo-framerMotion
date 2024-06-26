import React, { useState } from 'react'
import { galleryData } from '../Data'
import {motion} from "framer-motion"
import { fadeIn } from '../Variant'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";

const slides = galleryData.images.map(({original, width, height})=>({
    src: original,
    width,
    height
}))

const GallerySection = () => {
    const [index, setIndex] = useState(-1)
    const {title, btnText,btnIcon, images} = galleryData;
  return (
    <section className='bg-gray-100 section relative mt-[40px] xl:mt-0'>
        <div className='container mx-auto'>
            <motion.h2 variants={fadeIn("up")} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.6}} className='h2 max-w-[370px] xl:mb-20'>
                {title}
            </motion.h2>
        </div>
            {/* photo album */}
            <motion.div variants={fadeIn("up")} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className='mb-8 xl:mb-20' >
                <PhotoAlbum layout='rows' photos={images} onClick={(event, photo, index) => setIndex(index)}/>
                <Lightbox slides={slides} styles={{container: {backgroundColor: "rgba(0,0,0,.9)"}}} open={index >= 0} index={index} close={()=> setIndex(-1)}/>
            </motion.div>
            {/* btn */}
            <motion.div>
                <button className='btn btn-lg btn-dark' type='submit'>
                    <a href="/gallery">{btnText}</a>
                    <div className='text-cl'>{btnIcon}</div>
                </button>
            </motion.div>
    </section>
  )
}

export default GallerySection