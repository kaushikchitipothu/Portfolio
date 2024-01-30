import React from "react";
import profile from "../../Profile.jpeg";
import './About.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import work from '../../Work.jpg';
import school from '../../School.jpg';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from '../../KaushikChitipothu.pdf'
function About(){
    return(
        <div className="container-main">
        <div className="horizontal-flex">
            <div className="box">
            <img src={profile} alt="Profile" style={{borderRadius:'50%', width:'190px', height:'170px'}} />
            </div>
            <div className="vertical-flex">
              <div className="container-inside">
                <div>
                <br></br>
                <h4>Hello,</h4>
                <br></br>
                <p>I am a Computer Science Graduate Student at the University of Central Florida with a work experience of 28 months including an internship, from which I secured a full-time role as an Associate Software Engineer. During these 2 years in the industry, I worked across various technologies like AngularJS, .NET, SQL, WIX Toolset, and Kubernetes to develop multiple web applications, desktop applications, and an installer.</p>
                <br></br>
                <p>My primary programming language is JAVA but I am comfortable with Python and C# as well. I had a great learning curve during my work experience, I am sure that I can handle myself if I come across any new technologies or tech stacks. As part of my responsibilities, I have developed various new features and improved a lot of existing features through code refactoring.</p>
                <br></br>
                <p style={{fontWeight:'bold'}}>I am currently looking for Summer 2024 internships. I am flexible with Full-Stack, Frontend, and Backend roles.</p>
                </div>
                <div>
                <a href={resume} download="KaushikChitipothu.pdf"><button className="btn-resume"> <FontAwesomeIcon icon={faDownload}/> Resume </button></a>
                </div>   
              </div>
            </div>
        </div>
        <div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <h2>My activity</h2>
          </div>
        </div>
        <div>
        <VerticalTimeline style={{backgroundColor:'#F5F5F5'}}>
          <VerticalTimelineElement  className="vertical-timeline-element--work" date="Aug 2023 - May 2025*"
          iconStyle={{  color: 'white' }}
          icon={<img src={school} alt="myLogo" style={{ width: '100%', height: '100%' }}/>} contentStyle={{ backgroundColor: '#F5F5F5' }}>
          <h3 className="vertical-timeline-element-title">University of Central Florida</h3>
          <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
        <p>
           Master of Science in Computer Science
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="Jun 2021 - Aug 2023"  iconStyle={{  color: '#fff', fontSize:'1.5rem' }}
          icon={<img src={work} alt="myLogo" style={{ width: '100%', height: '100%' }} />} contentStyle={{ fontWeight:'bolder',backgroundColor: '#F5F5F5' }}>
        <h3 className="vertical-timeline-element-title">Opentext</h3>
        <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
        <p>
          Associate Software Engineer
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="Feb 2021 - Jun 2021"  iconStyle={{  color: '#fff', fontSize:'1.5rem' }}
          icon={<img src={work} alt="myLogo" style={{ width: '100%', height: '100%' }}/>} contentStyle={{ backgroundColor: '#F5F5F5' }}>
        <h3 className="vertical-timeline-element-title">Opentext</h3>
        <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
        <p> Software Intern </p>
       </VerticalTimelineElement>
       <VerticalTimelineElement className="vertical-timeline-element--education" date="Jul 2017 - Jul 2021"  iconStyle={{  color: '#fff', fontSize:'1.5rem' }}
          icon={<img src={school} alt="myLogo" style={{ width: '100%', height: '100%' }}/>} contentStyle={{ backgroundColor: '#F5F5F5' }}>
       <h3 className="vertical-timeline-element-title">Keshav Memorial Institute of Technology</h3>
       <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
       <p> Bachelor of Technology in Computer Science </p>
      </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
      </div>
    );
}

export default About;