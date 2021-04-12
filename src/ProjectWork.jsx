import React from 'react'

const ProjectWork = () => {
    return (
        <div>
            

         <section id="work" className="bg-light pt-0">
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2 text-center heading">
        <div className="header-page">
          <h2>My Projects</h2>
          <span />
        </div>
        <span className="heading-meta-sub">PORTFOLIO</span>
        <p> I have worked on several projects using ReactJS , NodeJS . By
                developing these projects I learned new technologies , build my
                problem solving skills .</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 px-25">
        {/* <ul className="work-filter">
          <li className="filter all active" data-filter="*">All</li>
          <li className="filter" data-filter=".branding">Branding</li>
          <li className="filter" data-filter=".web">Web</li>
          <li className="filter" data-filter=".mobile">Mobile</li>
          <li className="filter" data-filter=".photo">Photography</li>
        </ul> */}

      </div>
      <div className="col-lg-12">
        <div className="work-gallery"> 
          <div className="col-lg-6 col-md-6 col-sm-12 all photo mobile">
            <div className="work">
              <img className="img-fluid" src="images/3NEvents.png" alt />
              <div className="desc">
                <div className="con">
                  <h3><a href="work-single.html">3n Events</a></h3>
                  <span>Ecommerce website for Booiking any events .</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 all web">
            <div className="work">
              <img className="img-fluid" src="images/converter.png" alt />
              <div className="desc">
                <div className="con">
                  <h3><a href="work-single.html">Video Converter</a></h3>
                  <span>Convert video in a minutie</span>
                </div>
              </div>
            </div>
          </div>          
          <div className="col-lg-6 col-md-6 col-sm-12 all branding web">
            <div className="work">
              <img className="img-fluid" src="images/weather.png" alt />
              <div className="desc">
                <div className="con">
                  <h3><a href="work-single.html">Weather App</a></h3>
                  <span>Forecast two days's weather info  .</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 all web branding">
            <div className="work">
              <img className="img-fluid" src="images/xero.png" alt />
              <div className="desc">
                <div className="con">
                  <h3><a href="work-single.html">Traffic Monitor</a></h3>
                  <span>A forntend video player , where we can add ML script for classification of vehicles</span>
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

export default ProjectWork
