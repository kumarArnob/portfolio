import React from 'react';
import jsPDF from 'jspdf';





const Overview = () => {

  const GoDownload = ()=>{
    var doc = new jsPDF('landscape','px','a4','false')
    doc.save();

    //%PUBLIC_URL%/logo192.png
  }



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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vitae felis non porta. Mauris nibh diam, pharetra eu nunc id, lobortis faucibus purus. Praesent sit amet urna id velit dignissim pellentesque.Maecenas auctor vitae felis non porta. </p>
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
                  {/* <DownloadLink
                  className="btn btn"
                  label="Promise to Save"
                 filename="cv.pdf"
                 url
                  exportFile={() => Promise.resolve("My cached data")}
/> */}
                  {/* <Link to="/cv.pdf" className="btn btn" target="_blank" download>Download CV</Link> */}
                   
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
