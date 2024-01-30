import React from "react";
import "./Projects.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home from '../../Images/home_1.jpg';
import userHome from '../../Images/UserHome.png';
import adminHome from '../../Images/AdminHome..png';
import TcAppointments from '../../Images/TcAppointments..png';
import digitDataset from '../../Images/digit_dataset.png';
import mnistDataset from '../../Images/mnist_dataset.png';
import uspsDataset from '../../Images/usps_dataset.png';

function Projects(){
     
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, // Enable automatic slideshow
         autoplaySpeed: 3000
        };
    

    return(
        <div className="projects-container">
            <div className="project">
            <h3 >Computerized Fee Collection and Transfer Certificate Module</h3>
            <Slider style={{paddingTop:'30px'}} {...settings}>
            <div className="slide">
             <img src={home} alt="Slide 1" />
            </div>
            <div className="slide">
              <img src={userHome} alt="Slide 2" />
            </div>
            <div className="slide">
             <img src={adminHome} alt="Slide 3" />
            </div>
            <div className="slide">
             <img src={TcAppointments} alt="Slide 3" />
            </div>
    </Slider>
            <ul>
              <li>
                The above carousel displays the Home page, User Home Page, Admin Home Page and one of the pages from admin login respectively.
                </li>
                <li>
                This web application completely automates the fee payment module and also allows the user to book a slot to collect their Transfer Certificate and other certificate’s. This will help in reducing the waiting time by 90 - 100%  to collect their certificate’s and the appliction also allows the admin to manage the records of all the fee payments and slot booking.
                </li>
                <li>
                 The tech stack used is ReactJS, NodeJS and SQL.
                </li>
            </ul>
            </div>
            <div className="project">
            <h3>Hand Written Digit Recoginition</h3>
            <div className="project2-container">
            <div className="project2-images">
               <div>
                 <img className="imageStyle" src={digitDataset} alt="Digit dataset"/>
                 <div className="label">Digit Dataset</div>
               </div>
               <div>
                 <img className="imageStyle" src={mnistDataset} alt="MNIST dataset"/>
                 <div className="label">MNIST Dataset</div>
               </div>
               <div>
                 <img className="imageStyle" src={uspsDataset} alt="USPS dataset"/>
                 <div className="label">USPS Dataset</div>
               </div>
            </div>
            <div>
            <ul>
              <li>
               Generated a Convolutional Neural Network (CNN) that recognizes a Hand written digit with an accuracy of 97%.
                </li>
                <li>
                 I have used Modified National Institute of Standards and Technology database (MNIST) which has 60,000 training and testing samples, US Postal (USPS) dataset with 7291 training samples and 2007 testing samples and digit dataset with 1893 training samples and 1796 testing samples. Training and testing data was split in 70 to 30 ratio.
                </li>
                <li>
                I have used different algorithms like Artificial Neural Networks (ANN) and K-Nearest Neighbors (KNN) which gave an accuracy of 91% and 86% respectively.
                </li>
            </ul>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Projects;