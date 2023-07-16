import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='row'>
      <div className='d-flex justify-content-end col-2'>
        <img src='https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png' className='pt-2 ' />
      </div>
      <div className='d-flex justify-content-end flex-wrap col-8'>
        <Link id='links' to="/Courses"><p className='pt-4 mx-4'>COURSES</p></Link>
        <Link id='links' to="/LiveClass"><p className='pt-4 mx-4'>LIVE CLASSES</p></Link>
        <Link id='links' to="/OurProducts"><p className='pt-4 mx-4'>PRACTICE</p></Link>
        <Link id='links' to="/Practices"><p className='pt-4 mx-4'>RESOURCE</p></Link>
        <Link id='links' to="/Resources"><p className='pt-4 mx-4'>OUR PRODUCT</p></Link>
      </div>
     </div>
     
  )
}

export default Header