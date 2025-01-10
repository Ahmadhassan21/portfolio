import React from 'react';

function Home() {
  return (
    <>
      <div className="font-family">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-1">
              <div className="forsocialfonts">
                <div className="socialfonts">
                  <a href="#facebook"><i className="bx bxl-facebook-circle"></i></a>
                </div>
                <div className="socialfonts">
                  <a href="#instagram"><i className="bx bxl-instagram-alt"></i></a>
                </div>
                <div className="socialfonts">
                  <a href="#github"><i className="bx bxl-github"></i></a>
                </div>
              </div>
            </div>

            <div className="col-md-7 mt-1">
              <div className="forsecondportion">
                <h1>Ahmad Hassan <i className="fa-solid fa-handshake-simple"></i></h1>
                <div className="forsecondportion-content">
                  <p className="border"></p>
                  <p className="typingtext">Web Developer</p>
                </div>
                <p>I'm a Front-End Web Developer, and I'm very passionate and dedicated to my work.</p>
                <button className="mt-5">Say Hello <i className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="profile-container">
                {/* You can add an image here if you like */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-scroller">
        <div className="scroller">
          <div className="project">
            <img src={require('../Assets/proj-1.jpeg')} alt="Project 1" />
          </div>
          <div className="project">
            <img src={require('../Assets/Proj-2.jpeg')} alt="Project 2" />
          </div>
          <div className="project">
            <img src={require('../Assets/Proj-3.jpeg')} alt="Project 3" />
          </div>
          <div className="project">
            <img src={require('../Assets/Proj-4.jpeg')} alt="Project 4" />
          </div>
        </div>

        <div className="scroller">
          <div className="project">
            <img src={require('../Assets/proj-1.jpeg')} alt="Project 1" />
          </div>
          <div className="project">
            <img src={require('../Assets/Proj-2.jpeg')} alt="Project 2" />
          </div>
          <div className="project">
            <img src={require('../Assets/Proj-3.jpeg')} alt="Project 3" />
          </div>
          <div className="project">
            <img src={require('../Assets/Proj-4.jpeg')} alt="Project 4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
