import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from 'react-icons/fa';
import leetcode from '../leetcode.svg';
const Footer = () => {

 const linkedinUrl = 'https://www.linkedin.com/in/kaushik-chitipothu-6a451b1bb/';
  const email = 'kaushikchitipothu5@gmail.com';

  

  
	return (
		<footer className="footer">
           <div className="footer-container">
            <div className="footer-main">
            <p className="footerTitle">  Chitipothu Kaushik </p>
            <br></br>
            <p><a style={{color:'black'}} href={`mailto:kaushikchitipothu5@gmail.com`}>kaushikchitipothu5@gmail.com</a></p>
            <br></br>
            <p>(386) 473-8878</p>
            <br></br>
            </div> 
            </div>
            <div className="footer-icons">
               <div className="icons-inside">
                  <div>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                 </a>
                  </div>
               <div>
               <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
               </a>
                </div>
               <div>
               <a href="https://github.com/kaushikchitipothu" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
              </a>
               </div>
            <div>
            <a href="https://leetcode.com/kaushikchitipothu5/" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="LeetCode Logo" style={{ width: '2em', height: '2em'}}/>
            </a>   
            </div>
               </div>
              
            </div>
        </footer>
	);
};
export default Footer;
