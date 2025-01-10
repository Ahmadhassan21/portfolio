import React from 'react'
import Resume from '../Assets/Resume.png';
import MeDarkImage from '../Assets/me-dark.png'; // Improved image import

function Aboutme() {
    return (
        <div className='about-me'>
            <div className='about-heading'>
                <h1>About Me</h1>
                <p>My Introduction</p>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className='aboutimage'>
                            <img src={MeDarkImage} alt="Ahmad Hassan's Profile" />
                            <div className="img-content">
                                <h1>Ahmad Hassan</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='aboutbox'>
                            <div className="boxes">
                                <p><i className='bx bxs-medal boxixcons mt-2'></i></p>
                                <span>Experience</span>
                                <p style={{ fontSize: "10px", color: "grey" }}>6+ Months</p>
                            </div>
                            <div className="boxes">
                                <p><i className='bx bxs-shopping-bag boxixcons mt-2'></i></p>
                                <span>Completed</span>
                                <p style={{ fontSize: "10px", color: "grey" }}>20+ Projects</p>
                            </div>
                            <div className="boxes">
                                <p><i className='bx bx-headphone boxixcons mt-2'></i></p>
                                <span>Support</span>
                                <p style={{ fontSize: "10px", color: "grey" }}>Online 24/7</p>
                            </div>
                        </div>

                        <p style={{ color: "grey" }}>
                            "Hi, I’m Ahmad, a front-end developer with a passion for creating beautiful, interactive websites that prioritize both form and function. Many of my clients have been happy with the projects I've delivered. I’m dedicated to continuously improving my craft and always strive for clean, maintainable code."
                        </p>
                        <a href={Resume} download="Resume">
                            <button className='CV-btn mt-4'>
                                Download CV <i className='bx bx-file'></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
