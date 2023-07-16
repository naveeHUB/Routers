import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
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
  {
    id: 7,
    domain: "CyberSecurity",
    image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online"
  },
  {
    id: 8,
    domain: "CyberSecurity",
    image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    description: "Look around today, you will witness that we are more reliant on technology and devices"
  },
  {
    id: 9,
    domain: "CyberSecurity",
    image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
    title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    description: "Did you know that according to the University of Maryland hackers attack every 39 seconds"
  },
  {
    id: 10,
    domain: "Career",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/what-is-production-management.jpg",
    title: "What is Production Management | The Ultimate Guide",
    description: "In today’s constantly evolving business landscape, production managers are essential to the success of any"
  },
  {
    id: 11,
    domain: "Career",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/TCS-NQT-EXAM-2023.jpg",
    title: "What is TCS NQT | Everything You Need to Know",
    description: "As a fresh graduate, your goal is to join a reputable company and start your"
  },
  {
    id: 12,
    domain: "Career",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/machine-learning-cover-internship.png",
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
            <img src='https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png' className='d-flex justify-content-end' />
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