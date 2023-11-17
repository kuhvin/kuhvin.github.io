// Profile.js
import React from 'react';
import './Profile.css';
import image from './Profile.jpg';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scrollPos: 0};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const maxScroll = 400 
        const scrollPos = Math.min(window.scrollY, maxScroll);
        this.setState({scrollPos: scrollPos});
      
        const bar = document.getElementById('myBar');
        if (scrollPos < 400) { 
          bar.style.opacity = 0; 
        } else {
          bar.style.opacity = 1; 
        }
      }

    handleClick = () => {
        const scrollDuration = 1000; // Change this to control the duration of the scroll
        const scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(() => {
        if ( window.scrollY !== 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
  },15);
    }

    render() {
        const {scrollPos} = this.state;
        console.log(scrollPos);
        const picStyle = {
            width: `${Math.max(400 - scrollPos, 75)}%`, 
            top: `${-scrollPos}px`
        };
        const descStyle = {
            opacity: `${1 - scrollPos/300}`,
            top: `${-scrollPos - scrollPos/2 + 175}px`,
            visibility: `${scrollPos >= 200 ? 'hidden' : 'visible'}`
        };
        const barStyle = {
            top: scrollPos > 700 ? `-350px` : `${-scrollPos+ 50}px`,
            visibility: `${scrollPos >= 400 ? 'visible' : 'hidden'}`,
            width: `${scrollPos/400 * 100}vw`
        };
        const buttonStyle = {
            top: scrollPos > 700 ? `-800px` : `${-scrollPos - 10 }px`,
            visibility: `${scrollPos >= 400 ? 'visible' : 'hidden'}`,
            opacity: `${scrollPos/400}`,
        }
        
    
        return (
            <div id="profile">
                <div id="profile-pic-container">
                    <img id="profile-pic" src={image} alt="Profile" style={picStyle} onClick={this.handleClick} />
                </div>
                <div id="description-container">
                    <p id="description" style={descStyle}>Hi,I'm Kevin.</p>
                </div>
                <div className="button" id="about" style = {buttonStyle} onClick={() => this.handleClick('about')}>About</div>
                <div className="button" id="projects" style = {buttonStyle} onClick={() => this.handleClick('projects')}>Projects</div>
                <div className="button" id="resume" style = {buttonStyle} onClick={() => this.handleClick('resume')}>Resume</div>
                <div className="button" id="contact" style = {buttonStyle} onClick={() => this.handleClick('contact')}>Contact</div>
                <div id="myBar" style={barStyle}> </div>
            </div>
            
        );
    }
}

export default Profile;