import React from 'react';
import './about.css';

class About extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <h2>Hello</h2>
        <p>I'm a 3rd-year mathematics student at the University of British Columbia.<br />I'm interested in machine learning, algorthims, and  all aspects of software development.
        </p>
        <p>I'm currently a software engineer intern at ZiyuTec, where I'm<br />creating a central project management application from end-to-end. <br />
          <br/> So far, I've been lucky enough to be a project controls intern working on back-end
           <br /> optimization, and a
            volunteer to teach robotics to high school students. I'm always 
        <br/>looking for new opportunities to genuinely learn and grow.
        </p>
      </div>
    );
  }
}

export default About;