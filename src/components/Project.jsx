import React from "react";

const lists = [
  {
    work: "Weather App",
    img: "images/weather.png",
    desc: "A app that shows desired place's weather info .. ",
  },
  {
    work: "Traffic Monitor ",
    img: "images/xero.png",
    desc:"I have developed a Traffic monitor frontend , using NodeJS , expressJs .",
  },
  {
    work: "Video Converter",
    img: "images/converter.png",
    desc:"A unique converter that converts videos in any format like Flash ...",
  },
  {
    work: "3N Events",
    img: "images/3NEvents.png",
    desc: "An event organize web platform from where user can book parties .",
  },
];

const Project = () => {
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
              <span className="heading-meta-sub">PROJECTS</span>
              <p>
                I have worked on several projects using ReactJS , NodeJS . By
                developing these projects I learned new technologies , build my
                problem solving skills .
              </p>
            </div>
          </div>

          <div className="row">
            <div class="col-lg-12">
                {lists?.map((opt) => (
              <div class="work-gallery">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className="work">
                      <img className="img-fluid" src={opt.img} alt />
                      <div className="desc">
                        <div className="con">
                          <h3>
                            {/* <a href="#">{opt.work}</a> */}
                            {opt.work}
                          </h3>
                          <span>{opt.desc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
