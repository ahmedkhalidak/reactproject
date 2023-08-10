import React from 'react';
import img1 from './img1.jpg';
const Landing = () => {
  const landingStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
  };

  return (
    <section className="Landing text-light p-5" style={landingStyle}>
    <div className="container">
      <div className="row h-100">
        <div className="col-md-6">
          <h1 className="text-center m-2">Katie Reed</h1>
          <p className="text-center fs-4 m-2">Web Developer & Designer</p>
          <button className="btn btn-light btn-lg m-5" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white' }}>CONTACT ME</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Landing;
