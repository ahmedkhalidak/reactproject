import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        { name: 'React', progress: 80 },
        { name: 'JavaScript', progress: 70 },
        { name: 'HTML', progress: 90 },
        { name: 'CSS', progress: 85 },
        { name: 'Node.js', progress: 75 }
      ],
      focusSkills: ['ui/ux', 'responsive', 'web design', 'mobile app', 'css', 'js']
    };
  }

  render() {
    const { skills, focusSkills } = this.state;

    return (
      <section className="skills text-white py-5" style={{ background: 'rgb(61, 61, 61)' }}>
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <p className="text-center" style={{ fontSize: '1.1rem', margin: '50px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            aliquid a libero repudiandae ex reiciendis quasi, corporis pariatur
            aperiam expedita laudantium sapiente modi ut eum sed praesentium sunt
            dolores rem
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 text-white" style={{ background: 'rgb(61, 61, 61)' }}>
                <div className="card-body mt-5">
                  <h5 className="card-title text-center mb-3">My Focus</h5>
                  <hr className="m-1" />
                  <ul>
                    {focusSkills.map((skill, index) => (
                      <li key={index} className="mb-1" style={{ fontSize: '1.2rem' }}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card text-white" style={{ background: 'rgb(61, 61, 61)' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">Skills</h5>
                  {skills.map(skill => (
                    <div key={skill.name} className="mb-3">
                      <h6 className="mb-2">{skill.name}</h6>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${skill.progress}%`, backgroundColor: (skill.progress >= 50 ? '#959188' : '#404040') }}>
                          {`${skill.progress}%`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
