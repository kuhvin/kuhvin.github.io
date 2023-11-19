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
      <div id={props.id} className="section" style={{width: '45%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
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
                <p>Mekkanized</p>
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
                          July 2023 - Ongoing
                      </div>
                  </div>
                  <div style = {{flex: '70%', textAlign: 'left', paddingRight: '15px'}}>
                    <p>Mekkanizedd is a team project with the goal of creating and maintaining high-quality tournament software used
                    at Vex Robotics signature events.</p>
                    <p>My role in the project was to work in a 12-person team to create a web application that would allow teams to register for the tournament, and 
                      for the tournament organizers to manage the flow of games and scorekeeping.</p>
                      <p><span>More information about the event found <a href="https://www.mechamayhem.ca/" className="custom-link" style={{textDecoration: 'underline'}}>here</a>.</span></p>
                    <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '10px', textAlign: 'center'}}>
                        <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Go</div>
                        <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Figma</div>
                        <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Svelte</div>
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
                <p>This project was a voluntary commission to create a program that lets management track volunteer hours using smart cards.</p>
                <p>I created from scratch a program that used the OpenCard framework in Java, and succesfully deployed it to the non-profit organization I was working with.</p>
                <p>Like an amateur, I wrote the whole thing in Java, using the Java Card and Spire.XLS APIs to achieve what I needed.</p>
                  
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '10px', textAlign: 'center'}}>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>Java</div>
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
                <p>It took me about a week, and I am <em>very</em> proud.</p>
                  
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', paddingBottom: '10px', textAlign: 'center'}}>
                  <div style={{backgroundColor: '#4a4c51', padding: '5px', borderRadius: '5px', width: '75px', height: '20px',}}>JavaScript</div>
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