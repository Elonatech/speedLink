import React from 'react';
import './CaseStudy.css';
import { BiLogoTelegram } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

const CaseStudies = () => {
  return (
    <div className="container">
      <h1 className="title">Case Studies</h1>
      <p className="description">
        We’re proud to have helped build innovative solutions solving complex problems across varying industries. Check out what we’ve been up to.
      </p>
      <button className="moreWorkButton">See more of our work <BiLogoTelegram className='tel-icon'/></button>
      <div className="caseStudyContainer">
        <div className="caseStudy">
          <div className="caseStudyText redBackground">
            <h2>Integration of a secured and reliable examination platform</h2>
            <p>
              We built a hitch-free proctoring software for the School of Public Health, University of Port Harcourt that offers students and test takers the freedom to take a proctored exam at any time in any given location...
            </p>
            <button className="caseStudyButton">View Case Study <IoIosArrowForward className='arrow'/></button>
          </div>
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/pexels-christina-morillo-1181244-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.jpg" // Replace with the actual image source
            alt="Integration of a secured and reliable examination platform"
            className="image image-one"
          />
        </div>
        <div className="caseStudy two">
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/training-comressesd-scaled-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.webp"
            alt="Hybrid Learning Facility"
            className="image image-two"
          />
          <div className="caseStudyText blueBackground">
            <h2 className='text-two'>Hybrid Learning Facility</h2>
            <p>
              We developed a platform that can accommodate students who are unable to attend classes in person while also allowing students to attend classes in person or remotely with real-time audio and visual communication...
            </p>
            <button className="caseStudyButton">View Case Study <IoIosArrowForward className='arrow'/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
