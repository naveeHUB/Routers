import React from 'react'
import Menu from './Menu'
import {Link} from 'react-router-dom'
import cb7 from './img/cb-7.png'
import cb9 from './img/cb-9.webp'
import cybersecuity8 from './img/cybersecuity-8.gif'
const card = [
  {
    id: 7,
    domain: "CyberSecurity",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online"
  },
  {
    id: 8,
    domain: "CyberSecurity",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    description: "Look around today, you will witness that we are more reliant on technology"
  },
  {
    id: 9,
    domain: "CyberSecurity",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    description: "Did you know that according to the University of Maryland hackers attack every 39 seconds"
  }
]
function CyberSecurity() {
  return (
    <div>
    <div className='my-3'>
        <div className='row py-2 px-2'>
          <img src=' https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp' className='d-flex justify-content-end' />
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

export default CyberSecurity