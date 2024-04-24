import React from 'react'
import Navbar from './Navbar'
import Bloge from './Bloge'
import Footer from './Footer'

function BlogePage() {
  return (
    <>
        <Navbar/>
         <div className='mt-[70px]'>
        <Bloge/>
        </div>
        <Footer/>
    </>
  )
}

export default BlogePage