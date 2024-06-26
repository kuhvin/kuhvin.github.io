// Profile.js
import React from 'react';
import './Profile.css';
import image from './profile2.jpg';
import About from './sections/about';
import Projects from './sections/projects';
import Resume from './sections/resume';
import Contact from './sections/contact';


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
        console.log('Scrolling');
        const maxScroll = 400 
        const scrollPos = Math.min(window.scrollY, maxScroll);
        this.setState({scrollPos: scrollPos});
      
        const bar = document.getElementById('myBar');
        if (scrollPos < 400) { 
          bar.style.opacity = 0; 
        } else {
          bar.style.opacity = 1; 
        }

        var secondLayer = document.getElementById('second-layer');

        // Calculate the new height
        var newHeight = Math.max(110, 500-scrollPos);
        var newBar = Math.max(110, 500-scrollPos);

        // Set the new height
        secondLayer.style.height = newHeight + 'px';
        bar.style.top = newBar + 'px';
    }

    handleClick = (id) => {
        const scrollDuration = 600; // Increase this to make the scroll slower
        if (id === 'profile') {
            const scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(() => {
                if ( window.scrollY !== 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else clearInterval(scrollInterval); 
            },15);
        } else {
            const containerId = `${id}-container`; // Append "-container" to the id
            const element = document.getElementById(containerId);
            if (element) {
                const yOffset = -240; // Add your flat integer here
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scroll({ top: y, behavior: 'smooth' });
            } else {
                console.error(`No element with id "${containerId}" found`);
            }
        }
    }

    render() {
        const {scrollPos} = this.state;
        console.log(scrollPos);
        console.log(window.scrollY);
        const picStyle = {
            width: `${Math.max(400 - scrollPos, 75)}%`, 
            top: `${-scrollPos/10}vh`
        };
        const descStyle = {
            opacity: `${1 - scrollPos/300}`,
            top: `${-scrollPos/10 - scrollPos/20 + 17.5}vh`,
            visibility: `${scrollPos >= 200 ? 'hidden' : 'visible'}`
        };        
        const barStyle = {
            top: scrollPos > 700 ? `-35vh` : `${-scrollPos/100 * 50}vh`,
            visibility: `${scrollPos >= 400 ? 'visible' : 'hidden'}`,
            width: `${scrollPos/400 * 100}vw`
        };
        const buttonStyle = {
            top: scrollPos > 700 ? `-80vh` : `${-scrollPos/100 * 10 }vh`,
            visibility: `${scrollPos >= 400 ? 'visible' : 'hidden'}`,
            opacity: `${scrollPos/350}`,
        };

        const aboutSectionStyle = {  
            top: window.scrollY > 500 ? `${-scrollPos/100}vh` : `${-scrollPos/100 - 1 }vh`,
            visibility: `${scrollPos >= 200 ? 'visible' : 'hidden'}`,
            opacity: `${scrollPos > 400 ? 1 : scrollPos / 450}`,
            transition: 'top 0.3s, opacity 0.3s, transform 0.3s',
            marginBottom: `20%`
        };
        const projectsSectionStyle = {  
            top: window.scrollY > 500 ? `${-scrollPos/100}vh` : `${-scrollPos/100 - 1 }vh`,
            visibility: `${window.scrollY >= 500 ? 'visible' : 'hidden'}`,
            opacity: `${window.scrollY >= 800 ? 1 : window.scrollY / 1200}`,
            transition: 'top 0.3s, opacity 0.3s, transform 0.3s',
            marginBottom: `20%`
        }
        const resumeSectionStyle = {  
            top: window.scrollY > 500 ? `${-scrollPos/100}vh` : `${-scrollPos/100 - 1 }vh`,
            visibility: `${scrollPos >= 200 ? 'visible' : 'hidden'}`,
            opacity: `${window.scrollY >= 1400 ? 1 : window.scrollY / 2000}`,
            transform: `translateY(${scrollPos < 400 ? 50 - scrollPos / 8 : 0}%)`,
            transition: 'top 0.3s, opacity 0.3s, transform 0.3s',
            marginBottom: `10%`
        }
        const contactSectionStyle = {  
            top: window.scrollY > 500 ? `${-scrollPos/100}vh` : `${-scrollPos/100 - 1 }vh`,
            visibility: `${scrollPos >= 200 ? 'visible' : 'hidden'}`,
            opacity: `${window.scrollY >= 2700 ? 1 : scrollPos / 2800}`,
            transform: `translateY(${scrollPos < 400 ? 50 - scrollPos / 8 : 0}%)`,
            transition: 'top 0.3s, opacity 0.3s, transform 0.3s',
            marginBottom: `20%`
        }
    
        return (
            <div id="mainContainer">
            <div id="profile">
                <div id="profile-pic-container">
                    <img id="profile-pic" src={image} alt="Profile" style={picStyle} onClick={() => this.handleClick('profile')} />
                </div>
                <div id="description-container">
                    <p id="description" style={descStyle}>Hi, I'm Kevin.</p>
                </div>
                <div class="button-container">
                <div className="button" id="about" style = {buttonStyle} onClick={() => this.handleClick('about')}>About</div>
                <div className="button" id="projects" style = {buttonStyle} onClick={() => this.handleClick('projects')}>Projects</div>
                <div className="button" id="resume" style = {buttonStyle} onClick={() => this.handleClick('resume')}>Resume</div>
                <div className="button" id="contact" style = {buttonStyle} onClick={() => this.handleClick('contact')}>Contact</div>
                </div>
            </div>
            <div id="second-layer">
            <div id="myBar" style={barStyle}> </div>
            </div>
            <div id="sections-container">
            
                    <div className="section" id="about-container" style = {aboutSectionStyle}>
                        <About id="about" />
                    </div>
                    <div className="section" id="projects-container" style = {projectsSectionStyle}>
                        <Projects id="projects" />
                    </div>
                    <div className="section" id="resume-container" style = {resumeSectionStyle}>
                        <Resume id="resume" />
                    </div>
                    <div className="section" id="contact-container" style = {contactSectionStyle}>
                        <Contact id="contact" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;