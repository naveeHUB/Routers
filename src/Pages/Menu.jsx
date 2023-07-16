import React from 'react'
import {Link} from 'react-router-dom'
function Menu() {
  return (
    <div className='d-flex justify-content-center' style={{ boxShadow: '0px 4px 0px 3px #f0f0f0'}}>
      <Link id='links' to="/"><p className='mx-3'>All</p></Link>
      <Link id='links' to="/FSD"><p className='mx-3'>full stack development</p></Link>
      <Link id='links' to="/DataScience"><p className='mx-3'>data science</p></Link>
      <Link id='links' to="/CyberSecurity"><p className='mx-3'>cyber security</p></Link>
      <Link id='links' to="/Career"> <p className='mx-3'>career</p></Link>
    </div>
  )
}

export default Menu