import React from 'react'

function Skills() {
    return (
        <>
            <div className="skillheading">
                <h1>Skills</h1>
                <p>My technical level</p>
            </div>
            <div className="container d-flex justify-content-center">       
                <div className="card mx-auto">
                    <div className="card-body">
                        <h4 className='d-flex justify-content-center mt-3'>Frontend Developer</h4>
                        <div className='cardsskilldisplay'>
                            <div className='left-side'>
                                <div className='d-flex mb-4'>
                                    <i className="fa-solid fa-circle-check mx-2 mt-1"></i>
                                    <div className='skill-content'>
                                        <span>HTML</span>   
                                        <p>Basic</p>
                                    </div>
                                </div>

                                <div className='d-flex mb-4'>
                                    <i className="fa-solid fa-circle-check mx-2 mt-1"></i>
                                    <div className='skill-content'>
                                        <span>CSS</span>
                                        <p>Advanced</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <i className="fa-solid fa-circle-check mx-2 mt-1"></i>
                                    <div className='skill-content'>
                                        <span>JavaScript</span>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rightside">
                                <div className='d-flex mb-4'>
                                    <i className="fa-solid fa-circle-check mx-2 mt-1"></i>
                                    <div className='skill-content'>
                                        <span>Bootstrap</span>
                                        <p>Advanced</p>
                                    </div>
                                </div>

                                <div className='d-flex mb-4'>
                                    <i className="fa-solid fa-circle-check mx-2 mt-1"></i>
                                    <div className='skill-content'>
                                        <span>Git</span>
                                        <p>Intermediate</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <i className="fa-solid fa-circle-check mx-2 mt-1"></i>
                                    <div className='skill-content'>
                                        <span>React</span>
                                        <p>Intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
