import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="about ">
        <div className="container my-5">
          <div className="row">
            <div className="col-4">
              <h2 className="text-shadow m-5">About Me</h2>
            </div>
            <div className="col-8">
              <p className='m-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                aliquid a libero repudiandae ex reiciendis quasi, corporis
                pariatur aperiam expedita laudantium sapiente modi ut eum sed
                praesentium sunt
              </p>
              <button className="btn btn-secondary">
                <a
                  href="/path-to-resume.pdf"
                  download
                  className="text-white text-decoration-none"
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
