import React from 'react';
import './resume.css';
import resumepdf from './resumeCopy.pdf'

class Resume extends React.Component {
  render() {
    return (
      <>
      <div id={this.props.id} className="section">
        <h2>Resume</h2>
        <p style={{marginBottom: '80px'}}><a href={resumepdf} className="custom-link" style={{textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer">Here's the PDF copy.</a></p>
      </div>
      <div className="resume" style={{width: '50%', margin: 'auto'}}>
      <h1>Kevin Li</h1>
      <h5 style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}> 
            <a className="custom-link" href="mailto:kevinli5090@gmail.com">kevinli5090@gmail.com</a> | 
            780-566-5090 | 
            <a className="custom-link" href="https://www.linkedin.com/in/kevinli5090/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/kevinli5090/</a> | 
            <a className="custom-link" href="kuhvin.ca" target="_blank" rel="noopener noreferrer">kuhvin.ca</a>
      </h5>
      <div style={{textAlign: 'left', margin: '-50px'}}>
          <h2>EDUCATION</h2>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p><b>University of British Columbia - Vancouver, BC</b></p>
              <p><b>Expected Graduation: May 2025</b></p>
          </div>
          <p style={{marginTop: '0', marginBottom: '30px'}}>Bachelor of Science - Mathematics
          <ul style = {{marginBottom: '30px'}}> 
            <li> <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Relational Databases, Software Engineering</li>
          </ul>
          </p>
          <h2>TECHNICAL SKILLS</h2>
          <hr/>
          <ul style = {{marginBottom: '30px'}}> 
            <li><strong>Languages:</strong> Java, JavaScript, Python, SQL, C++, C, HTML, JSON, PHP</li>
            <li><strong>Tools:</strong> React, Express, Node, Git, Slack, MySQL, Junit, Excel, Microsoft PowerApps </li>
          </ul>
          <h2>WORK/VOLUNTEER EXPERIENCE</h2>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p><b>Bantrel - Project Controls Intern • Edmonton, AB</b></p>
              <p><b>May 2023 - August 2023</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Co-led the design and digitization of essential company files to a more central, online infrastructure surrounding Microsoft SharePoint </li>
            <li>Completed comprehensive queries in SQL and Excel to streamline employee interaction with company network drive and cloud database, allowing for more seamless configuration for historic and future file storage </li>
            <li>Restructured outdated Firefox and Microsoft Azure databases to a new company DBMS </li>
            <li>Created multiple user-friendly templates using Microsoft Power Apps and Flow Automate for file creation to improve workflow and communication between engineering departments </li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Western Mechatronics - Business Manager • Calgary, AB</b></p>
              <p style = {{marginTop: '0'}}><b>July 2022 - Present</b></p>
          </div>
          <ul style = {{marginTop: '0', marginBottom: '30px'}}>
            <li>Managed the application of grants and other subsidiaries totalling over $20,000 </li>
            <li>Active mentor for students grades 5 to 12 learning robotics, introducing key mechanical principles and fundamental programming processes  </li>
            <li>Key volunteer at national robotics events, overseeing tournament progress and providing technical support in all areas</li>
          </ul>
          <h2>PROJECT EXPERIENCE</h2>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Furever Friends - Class Project</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Developed a full-stack database application to help adopters find pets using MySQL, PHP, Express and JavaScript </li>
            <li>Created numerous types of queries to match application demands, including real-time projection, aggregation and division</li>
            <li>Implemented input sanitization by parameterizing MySQL user inputs to prevent injection</li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Personal Website - Personal Project</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Created an online portfolio website using the React environment</li>
            <li>Designed and implemented a minimalistic design and smooth user experience with HTML and CSS animations</li>
            <li>Wrote website functionality using JavaScript to help navigate the entirety of the site</li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Volunteer Hours Tracker - Personal Project</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Developed a smartcard reader application in Java to help a non-profit organization track volunteer hours</li>
            <li>Used the OpenCard Framework in Java to connect the chip reader with the back-end of the application</li>
            <li>Implemented the Java Card applet and framework on the smart card, enabling interaction with the card terminal using ISO-7816 APDU commands</li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Media Tracker - Class Project</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Designed a user interface for a movie watchlist application using Java Swing</li>
            <li>Used JSON Reader and Writer to create temporary databases on local devices</li>
            <li>Tested implementation and exception handling using the JUnit library </li>
          </ul>
          </div>
      </div>
      </>
    );
  }
}

export default Resume;