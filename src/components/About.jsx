import React from 'react'
// import weatherData from './weatherData'

const About = (props) => {

  const goLkdn = ()=>{
    window.open('https://www.linkedin.com/in/kumararnob');
  }
  const goGit = ()=>{
    window.open('https://github.com/kumarArnob');
  }
    return (
        <div>
          
    <section id="banner" className="js-fullheight">
      <div className="flexslider js-fullheight">
        <ul className="list-unstyled ml-5 mt-3 position-relative social-links">
          <li className="mb-3"><a onClick={goLkdn}><i className="fab fa-linkedin-in" /></a></li>
          <li className="mb-3"><a onClick={goGit}><i className="fab fa-github" /></a></li>
          </ul>
        <ul className="slides">
          <li style={{backgroundImage: 'url(images/cover.jpg)'}}>
            <div className="overlay-gradient" />
            <div className="container">
                  {/* <div className="d-flex flex-row-reverse bd-highlight">
                    <div className="bd-highlight ml-5">city</div>
                    <div className="bd-highlight">logo</div>
                  </div> */}
              <div className="col-md-10 js-fullheight slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    
                    <h2>Kumar Arnob Mandol</h2>
                    <h3>I am a 

                      
                      {" "}<span id="typed-slide-1" />
                      
                   
                    <span id="typed-strings-slide-1"> 
                       
                       {" "} <span>Web Developer</span>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
    
        </div>
    )
}

export default About
