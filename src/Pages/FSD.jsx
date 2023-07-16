import React from 'react'
import img from './img/FSDimg.png'
import Menu from './Menu'
import {Link} from 'react-router-dom'
const card = [
  {
    id: 1,
    domain: "FSD",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "Roles & Responsibilities of Full Stack Developers in 2023",
    description: "Do you want to become a full stack developer? If yes, you must definitely know"
  },
  {
    id: 2,
    domain: "FSD",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/software-engineering-internships.png",
    title: "7 Powerful Steps to Land a Software Developer Internship",
    description: "Software development is set to grow at the rate of 25% between 2021-2031. An illustrious"
  },
  {
    id: 3,
    domain: "FSD",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/05/Screenshot-2023-05-09-at-4.13.14-AM.png",
    title: "Top 26 Hibernate Interview Questions and Answers (2023)",
    description: "If you&#180;re at a technical job interview, the last thing you want is to get"
  },
]
function FSD() {
  return (
    <div>
    <div className='my-3'>
        <div className='row py-2 px-2'>
          <img src={img} className='d-flex justify-content-end' />
        </div>
      <Menu />
    </div>
    <div className='container'>
        <div className='container-fluid'>
          <div className='d-flex flex-wrap gap-5 mx-5 px-5 my-5'>
            {card.map((data, i) => (
              <Link id='links'to={`/all/${data.domain}`}> <div className="card" style={{ width: "18rem" }} key={`card-${i}`}>
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

export default FSD