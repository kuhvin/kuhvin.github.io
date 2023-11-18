import React from 'react';
import './resume.css';

class Resume extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="section">
        <h2>Resume</h2>
        {/* Add more content here */}
      </div>
    );
  }
}

export default Resume;