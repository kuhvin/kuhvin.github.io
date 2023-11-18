import React from 'react';
import './projects.css';

class Project extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="section">
        <h2>Projects</h2>
        <p></p>
        {/* Add more content here */}
      </div>
    );
  }
}

export default Project;