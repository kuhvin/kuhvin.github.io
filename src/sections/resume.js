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
            <a className="custom-link" href="https://github.com/kuhvin" target="_blank" rel="noopener noreferrer">https://github.com/kuhvin</a> | 
            <a className="custom-link" href="https://www.linkedin.com/in/kevinli5090/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/kevinli5090/</a>
      </h5>
      <div style={{textAlign: 'left', margin: '-50px'}}>
          <h2>EDUCATION</h2>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p><b>University of British Columbia - Vancouver, BC</b></p>
              <p><b>Expected Graduation: May 2025</b></p>
          </div>
          <p style={{marginTop: '0', marginBottom: '30px'}}>Bachelor of Science - Mathematics</p>
          <h2>TECHNICAL SKILLS</h2>
          <hr/>
          <ul style = {{marginBottom: '30px'}}>
            <li><strong>Languages:</strong> Java, Python, SQL, C++, C, CSS, HTML, Latex, Assemly, R, Lua</li>
            <li><strong>Tools:</strong> Git, JSON, R Studio, NLTK, XML, Java Card, JSON, React, Node.js, Excel, Sharepoint, Flow Automate, VS Code, IntelliJ, Pycharm</li>
          </ul>
          <h2>WORK EXPERIENCE</h2>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p><b>Bantrel - Project Controls Intern • Edmonton, AB</b></p>
              <p><b>May 2023 - August 2023</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Co-led the design and digitization of essential company files to a more central, online infrastructure using SharePoint </li>
            <li>Completed numerous queries in SQL and Excel to streamline employee interaction with network drives and cloud databases </li>
            <li>Restructured outdated Firefox and Microsoft Azure databases to a custom Bantrel SQL database </li>
            <li>Created multiple user-friendly templates using Microsoft Power Apps and Flow Automate for file creation to streamline workflow and communication between engineering departments </li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Western Mechatronics - Business Manager • Calgary, AB</b></p>
              <p style = {{marginTop: '0'}}><b>July 2022 - Present</b></p>
          </div>
          <ul style = {{marginTop: '0', marginBottom: '30px'}}>
            <li>Manager for application of grants and other subsidiaries totalling over $20,000 </li>
            <li>Secured a partnership with Google through administering their Girl Powered Event </li>
            <li>Mentor for students grades 5 to 12 to use VexCode to program the main processor for various mechatronic projects </li>
            <li>Collaborating on a 12-person programming team developing a tournament software for a national competition </li>
          </ul>
          <h2>PROJECT EXPERIENCE</h2>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Volunteer Hours Tracker - Personal Project</b></p>
              <p style = {{marginTop: '0'}}><b>April 2023 - June 2023</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Developed a smartcard reader application in Java to help a non-profit organization track volunteer hours</li>
            <li>Used the OpenCard Framework in Java to connect the chip reader with the back-end of the application</li>
            <li>Implemented the Java Card applet and framework on the smart card, enabling interaction with the card terminal using ISO-7816 APDU commands</li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Western Mechatronics - Business Manager • Calgary, AB</b></p>
              <p style = {{marginTop: '0'}}><b>Octover 2022 - November 2022</b></p>
          </div>
          <ul style = {{marginTop: '0'}}>
            <li>Designed a user interface for a movie watchlist application using Java Swing</li>
            <li>Used JSON Reader and Writer to create temporary databases on local devices</li>
            <li>Tested implementation and exception handling using the JUnit library </li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'space-between', }}>
              <p style = {{marginTop: '0'}}><b>Junior Achievement - VP IT/Fiannce • Calgary, AB</b></p>
              <p style = {{marginTop: '0'}}><b>July 2022 - Present</b></p>
          </div>
          <ul style = {{marginTop: '0', marginBottom: '30px'}}>
            <li>Maintained and managed all income and expenses for a student-led small business</li>
            <li>Led a four-person team to design the company website and social media pages using HTML</li>
          </ul>
          </div>
      </div>
      </>
    );
  }
}

export default Resume;