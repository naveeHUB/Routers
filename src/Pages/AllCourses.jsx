import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import First11 from './img/first-11.webp'
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
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "7 Powerful Steps to Land a Software Developer Internship",
    description: "Software development is set to grow at the rate of 25% between 2021-2031"
  },
  {
    id: 3,
    domain: "FSD",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
    title: "Top 26 Hibernate Interview Questions and Answers (2023)",
    description: "If you&#180;re at a technical job interview, the last thing you want is to get"
  },
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
  {
    id: 7,
    domain:"CyberSecurity",
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
  },
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

function AllCourses() {
  return (
    <div>
      <div className='my-3' style={{ boxShadow: '0px 0px 0px 5px #f0f0f0' }}>
        <div className='container'>
          <div className='row py-2 px-2'>
            <img src={First11} className='d-flex justify-content-end' />
          </div>
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

export default AllCourses