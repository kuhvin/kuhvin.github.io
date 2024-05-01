import React, { useState } from 'react';
import './projects.css';

const Project = (props) => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  
  const handleExpandClick1 = () => {
      setIsExpanded1(!isExpanded1);
  };
  
  const handleExpandClick2 = () => {
      setIsExpanded2(!isExpanded2);
  };

  const handleExpandClick3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const [hoveredBox, setHoveredBox] = useState(null);

const handleMouseEnter = (id) => {
    setHoveredBox(id);
}

const handleMouseLeave = () => {
    setHoveredBox(null);
}
  
  return (
      <div id={props.id} className="section">
          <h2>Projects</h2>
          <div onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{
            borderRadius: '10px', 
            width: '100%', 
            backgroundColor: '#282b30', 
            marginBottom: '30px', 
            filter: hoveredBox === 2 || hoveredBox === 3 ? 'blur(2px)' : 'none',
            opacity: hoveredBox === 2 || hoveredBox === 3 ? 0.5 : 1,
            transition: '0.2s'}}>
          <div onClick={handleExpandClick1} style={{cursor: 'pointer', padding: '10px', fontWeight: 'bold'}}>
                <p>Furever Friends</p>
          </div>
            <div style={{
                  maxHeight: isExpanded1 ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.7s ease-in-out',  
                  width: '100%', // Adjust this to change the width of the box
                  backgroundColor: '#353535',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  display: 'flex',
                  flexDirection: 'row'
              }}>
                  <div style={{flex: '30%', display: 'flex', justifyContent: 'center'}}>
                      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontWeight: 'bold'}}>
                          February 2024 - April 2024
                      </div>
                  </div>
                  <div style = {{flex: '70%', textAlign: 'left', paddingRight: '15px'}}>
                    <p>Furever Friends was a class project with the goal of designing and implementing a full-stack web application that would help users to adopt pets from local shelters. </p>
                    <p>My role in the project was to set up the database server, write queries that allowed for the required retrieval of information, and sanitize user inputs to prevent SQL injection.</p>
                    
                    <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '10px', textAlign: 'center'}}>
                        <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>PHP</div>
                        <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>MySQL</div>
                        <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Express</div>
                        <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Node.js</div>
                        {/* Add more boxes here */}
                    </div>
                  </div>
                </div>
            </div>
            <div onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{
              borderRadius: '10px', 
              width: '100%', 
              backgroundColor: '#282b30',
              marginBottom: '30px', 
              filter: hoveredBox === 1 || hoveredBox === 3 ? 'blur(2px)' : 'none', 
              opacity: hoveredBox === 1 || hoveredBox === 3 ? 0.5 : 1,
              transition: '0.2s'}}>
              <div onClick={handleExpandClick2} style={{cursor: 'pointer', padding: '10px', fontWeight: 'bold'}}>
                    <p>Volunteer Hours Tracker</p>
              </div>
              <div style={{
                  maxHeight: isExpanded2 ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.7s ease-in-out',  
                  width: '100%', // Adjust this to change the width of the box
                  backgroundColor: '#353535',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  display: 'flex',
                  flexDirection: 'row'
              }}>
              <div style={{flex: '30%', display: 'flex', justifyContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontWeight: 'bold'}}>
                            April 2023 - June 2023
                        </div>
              </div>
              <div style = {{flex: '70%', textAlign: 'left', paddingRight: '15px'}}>
                <p>This project was a solo voluntary commission to create a program that lets management track volunteer hours using smart cards.</p>
                <p>I created a program that used the OpenCard framework in Java, stored all the info in an Excel database using the Apache Java API, and succesfully deployed it to current use.</p>
                  
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '10px', textAlign: 'center'}}>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Java</div>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '125px', height: '20px',}}>Apache POI</div>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Excel</div>
                </div>
                </div>
              </div>
              </div>
              <div>
              <div onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{
              borderRadius: '10px', 
              width: '100%', 
              backgroundColor: '#282b30',
              marginBottom: '30px', 
              filter: hoveredBox === 1 || hoveredBox === 2 ? 'blur(2px)' : 'none', 
              opacity: hoveredBox === 1 || hoveredBox === 2 ? 0.5 : 1,
              transition: '0.2s'}}>
              <div onClick={handleExpandClick3} style={{cursor: 'pointer', padding: '10px', fontWeight: 'bold'}}>
                    <p>This Website</p>
              </div>
              <div style={{
                  maxHeight: isExpanded3 ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.7s ease-in-out',  
                  width: '100%', // Adjust this to change the width of the box
                  backgroundColor: '#353535',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  display: 'flex',
                  flexDirection: 'row'
              }}>
              <div style={{flex: '30%', display: 'flex', justifyContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontWeight: 'bold'}}>
                            November 2023
                        </div>
              </div>
              <div style = {{flex: '70%', textAlign: 'left', paddingRight: '15px'}}>
                <p>This was my first venture into front-end programming and design.</p>
                <p>I set out to create a developer portfolio and try my hand with web development languages, using React to help me visualize what was going on.</p>
                <p>I opted to keep it smooth and minimal to help keep it easy on the eyes.</p>
                  
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '10px', textAlign: 'center'}}>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '100px', height: '20px',}}>JavaScript</div>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>HTML</div>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>CSS</div>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>React</div>
                </div>
                </div>
                </div>
              </div>
              </div>
            </div>
          
  );
}

export default Project;