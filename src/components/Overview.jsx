import React from 'react';
import jsPDF from 'jspdf';





const Overview = () => {

 



    return (
        <div>
            <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="post-entry">
              <div className="col-md-6">
                <div className="header-page-about">
                  <h2 className="intro-heading">About Me</h2>
                </div>
                <p>I love to code, design and program. Also, a tech enthusiast, with proficiency in languages like C++ , JavaScript , Python . Looking forward to work with other professionals to learn from them as well and improve my skills which can be useful for the growth of my professional career and also for the growth of the company itself .</p>
                <div className="col-md-6 col-sm-4 no-padding">
                  <ul>
                    <li><span>Name : </span>Kumar Arnob Mandol</li>
                    <li><span>Job : </span>Web Developer</li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-4 no-padding">
                  <ul>
                    <li><span>Email : </span> <a href="#">mail2arnb@gmail.com</a></li>
                    <li><span>Phone : </span> <a href="#"> 7980817947 </a></li>
                  </ul>
                </div>
                <hr />
                <div className="col-md-12 no-padding mt-20">
                  <a className="btn btn " href="./CV.pdf" download="Kumar_Arnob_Mandol">Download CV</a>
                 
                </div>
              </div>
              <div className="col-md-4">
                <div className="post-image" style={{backgroundImage: 'url(images/me3.jpg)'}} />
                <div className="display-tc">
                  <div className="desc">
                    <h3>My skill</h3>
                    <div className="skill-item">
                      <h5>HTML &amp; CSS</h5><span>70%</span>
                      <div className="progress" data-percent="80%">
                        <div className="progress-bar bar-null" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
                      </div>
                    </div>
                    <div className="skill-item">
                      <h5>Node JS</h5><span>60%</span>
                      <div className="progress" data-percent="80%">
                        <div className="progress-bar bar-null" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
                      </div>
                    </div>
                    <div className="skill-item">
                      <h5>React</h5><span>50%</span>
                      <div className="progress" data-percent="80%">
                        <div className="progress-bar bar-null" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


        </div>
    )
}

export default Overview
