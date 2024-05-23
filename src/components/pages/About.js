import React from "react";
import profile from "../../Profile.jpg";
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
            <div>
            <img src={profile} alt="Profile" style={{borderRadius:'50%', width:'200px', height:'200px'}} />
            </div>
            <div className="resume">
                <a href={resume} download="KaushikChitipothu.pdf"><button className="btnResume"> <FontAwesomeIcon icon={faDownload}/> Resume </button></a>
            </div>   
            </div>
            <div className="vertical-flex">
              <div className="container-inside">
                <div>
                <br></br>
                <h4>Hello,</h4>
                <br></br>
                <p>I am a Computer Science graduate student at the University of Central Florida, set to graduate in May 2025.</p>
                <br></br>
                <p>During my 6th semester of B.Tech, I interned as a Software Engineer at OpenText, where I primarily focused on deploying the product suite to the cloud using Kubernetes and Docker.</p>
                <br></br>
                <p>Following a successful 3-month internship, I transitioned into a full-time role as an Associate Software Engineer. In this role, I worked as a full stack developer with a primary focus on .NET and Angular. I developed crucial features such as implementing OAuth, developing RestAPIs for web applications, and designing user interfaces for multiple applications. Additionally, I developed an installer for our product suite from scratch.</p>
                <br></br>
                <p>After over 3 years of professional experience, I decided to further enhance my skills by pursuing a Master's degree in Computer Science. Over the past year, I have expanded my knowledge in various fields including computer vision, algorithms, malware analysis, and computer architecture. With this advanced education and my extensive experience, I believe I can be a valuable asset as a software developer.</p>
                <br></br>
                <p style={{fontWeight:'bold'}}>I am currently seeking developer roles and am flexible with Full-Stack, Frontend, and Backend positions.</p>
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
        <VerticalTimelineElement className="vertical-timeline-element--work" date="Jun 2020 - Aug 2023"  iconStyle={{  color: '#fff', fontSize:'1.5rem' }}
          icon={<img src={work} alt="myLogo" style={{ width: '100%', height: '100%' }} />} contentStyle={{ fontWeight:'bolder',backgroundColor: '#F5F5F5' }}>
        <h3 className="vertical-timeline-element-title">Opentext</h3>
        <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
        <p>
          Associate Software Engineer
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="Feb 2020 - Jun 2020"  iconStyle={{  color: '#fff', fontSize:'1.5rem' }}
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