import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  const [projects] = useState([
    {
      name: 'WEB DESIGN',
      backgroundColor: '#959188',
    },
    {
      name: 'MOBILE DESIGN',
      backgroundColor: '#404040',
    },
    {
      name: 'LOGO DESIGN',
      backgroundColor: '#959188',
    },
    {
      name: 'WEB APPLICATION ',
      backgroundColor: '#404040',
    },
    {
      name: 'MOBILE APPLICATION ',
      backgroundColor: '#959188',
    },
    {
      name: 'PWA DEVELOPMENT',
      backgroundColor: '#404040',
    },
  ]);

  return (
    <div className="container mt-5 ">
      <h2 className='text-start mb-4'>Portfolio</h2>
      <div className="row mb-5">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4 g-5  ">
            <div className="card h-100 w-100 my-5 py-5 shadow-lg" style={{ backgroundColor: project.backgroundColor }}>
              <div className="card-body">
                <div className="card-title text-white fs-3 fw-bold ">{project.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
