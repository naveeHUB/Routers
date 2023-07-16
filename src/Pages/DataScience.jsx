import React from 'react'
import Menu from './Menu'
import Dsimg from './img/Datascience.png'
import {Link} from 'react-router-dom'
const card = [
  {

    id: 4,
    domain: "DS",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/VMWARE-Vs-VIRTUAL-BOX-2048x1152.png",
    title: "VMware vs VirtualBox: Picking the Right Hypervisor for Virtualisation",
    description: "In today&#180;s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged"
  },
  {
    id: 5,
    domain: "DS",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
    title: "8 Mistakes To Avoid When You Begin a Data Science Career",
    description: "With leading modern-day companies relying on Data Science professionals to make more informed decisions and"
  },
  {
    id: 6,
    domain: "DS",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/04/image-5.png",
    title: "Data Science vs. Machine Learning: What every elite coder needs to know",
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