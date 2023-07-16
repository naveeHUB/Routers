import React from 'react'
import Menu from './Menu'
import Dsimg from './img/Datascience.png'
import {Link} from 'react-router-dom'
import ds4 from './img/ds-4.webp'
import ds5 from './img/ds-5.webp'
import ds6 from './img/ds-6.png'
const card = [
  {
    id: 4,
    domain: "Datascience",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "VMware vs VirtualBox: Picking the Right Hypervisor for Virtualisation",
    description: "Fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged"
  },
  {
    id: 5,
    domain: "Datascience",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "8 Mistakes To Avoid When You Begin a Data Science Career",
    description: "With leading modern-day companies relying on Data Science professionals to make more informed decisions and"
  },
  {
    id: 6,
    domain: "Datascience",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "Data Science vs. Machine Learning",
    description: "As the world becomes increasingly data-driven, the demand for professionals who can analyze and interpret"
  },
]

function DataScience() {
  return (
    <div>
    <div className='my-3'>
        <div className='row py-2 px-2'>
          <img src={Dsimg} className='d-flex justify-content-end' />
        </div>
      <Menu />
    </div>
    <div className='container'>
        <div className='container-fluid'>
          <div className='d-flex flex-wrap gap-5 mx-5 px-5 my-5'>
            {card.map((data, i) => (
              <Link id='links' to={`/all/${data.domain}`}> <div className="card" style={{ width: "18rem" }} key={`card-${i}`}>
                <img src={data.image} className="card-img-top" alt={data.domain} style={{ height: "10rem" }} />
                <div className="card-body">
                  <h6 className="card-title">{data.title}</h6>
                  <p className="card-text">{data.description}</p>
                </div>
              </div></Link>))}
          </div>
        </div>
      </div>
  </div>
  )
}

export default DataScience