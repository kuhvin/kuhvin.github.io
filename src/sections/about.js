import React from 'react';
import './about.css';

class About extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <h2>Hello</h2>
        <p>I'm a 3rd-year mathematics student at the University of British Columbia.<br />I'm interested in machine learning, algorthims, and software development.
        </p>
        <p>I'm a self-taught programmer, and I recognize that I have a long way to go<br /> before I can call myself a software engineer. I'm always looking for new<br /> opportunities to learn and grow as a developer.</p>
      </div>
    );
  }
}

export default About;