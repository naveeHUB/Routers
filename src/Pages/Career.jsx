import React from 'react'
import Menu from './Menu'
import {Link} from 'react-router-dom'
import career11 from './img/career-11.jpg'
import career12 from './img/career-12.webp'
import careers10 from './img/careers-10.jpg'
const card = [
    {
      id: 10,
      domain: "Career",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
      title: "What is Production Management | The Ultimate Guide",
      description: "constantly evolving business landscape, production managers are essential "
    },
    {
      id: 11,
      domain: "Career",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
      title: "What is TCS NQT | Everything You Need to Know",
      description: "As a fresh graduate, your goal is to join a reputable company and start your"
    },
    {
      id: 12,
      domain: "Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
      title: "7 Powerful Steps to Land a Machine Learning Internship",
      description: "Machine learning is set to grow at the rate of 36.2% CAGR by the end"
    }
]
function Career() {
  return (
    <div>
    <div className='my-3' >
        <div className='row py-2 px-2'>
          <img src=' https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp' className='d-flex justify-content-end' />
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

export default Career