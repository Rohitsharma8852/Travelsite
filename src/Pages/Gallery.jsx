import React from 'react'
import Navbar from './Navbar'
import Places from './Places'
import Footer from './Footer'

function Gallery() {
  return (
    <>
     <Navbar/>
         <div className='mt-[70px]'>
        <Places/>
        </div>
        <Footer/>
    </>
  )
}

export default Gallery