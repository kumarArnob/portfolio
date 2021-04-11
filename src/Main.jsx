import React from 'react'

const Main = () => {
    return (
        <div>
            
          <div>
  {/* <div id="preloader">
    <div className="pre-container">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  </div> */}
  <nav id="main-nav">
    <a href="#" className="js-nav-toggle nav-toggle active"><i /></a>
    <div className="js-fullheight table">
      <div className="table-cell js-fullheight">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <p className="social-icon">
          <a href="#"><i className="fab fa-facebook-square" /></a>
          <a href="#"><i className="fab fa-twitter-square" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-dribbble" /></a>
        </p>
      </div>
    </div>
  </nav>
  <div className="scroll-icon">
    <a href="#info" className="smoothscroll">
      <div className="mouse" />
    </a>
    <div className="end-top" />
  </div>
  <div id="page">
    <header className="header">
      <div className="container">
        <div className="navbar-brand">
          <div className="row">
            <div className="col-xs-6">
              <h1 className="text-left"><a className="logo" href="index.html">Gwyn</a></h1>
            </div>
          </div>
          <a href="#" className="js-nav-toggle nav-toggle"><i /></a>
        </div>
      </div>
    </header>
    
    <section id="resume" className="bg-dark bg-dots">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading">
            <div className="header-page">
              <h2>My Resume</h2>
              <span />
            </div>
            <span className="heading-meta-sub">RESUME</span>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <div className="item mb-40">
                <h4><span className="item-icon"><i className="fas fa-briefcase" /></span>Creative Director</h4>
                <span className="meta">10.2017 - 09.2019</span>
                <h5>Freelancer</h5>
                <p>hasellus ipsum metus, gravida sit amet sollicitudin ac, efficitur eget risus. Curabitur commodo malesuada neque at hendrerit.</p>
              </div>
              <div className="item mb-40">
                <h4><span className="item-icon"><i className="fas fa-briefcase" /></span>Creative Director</h4>
                <span className="meta">09.2017 - 04.2019</span>
                <h5>Freelancer</h5>
                <p>hasellus ipsum metus, gravida sit amet sollicitudin ac, efficitur eget risus. Curabitur commodo malesuada neque at hendrerit.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="item mb-40">
                <h4><span className="item-icon"><i className="fas fa-graduation-cap" /></span>Specialization course</h4>
                <span className="meta">10.2018 - 09.2019</span>
                <h5>Freelancer</h5>
                <p>Phasellus ipsum metus, gravida sit amet sollicitudin ac, efficitur eget risus. Curabitur commodo malesuada neque at hendrerit.</p>
              </div>
              <div className="item mb-40">
                <h4><span className="item-icon"><i className="fas fa-graduation-cap" /></span>Specialization course</h4>
                <span className="meta">09.2018 - 04.2019</span>
                <h5>Freelancer</h5>
                <p>Phasellus ipsum metus, gravida sit amet sollicitudin ac, efficitur eget risus. Curabitur commodo malesuada neque at hendrerit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading">
            <div className="header-page">
              <h2>My Services</h2>
              <span />
            </div>
            <span className="heading-meta-sub">SERVICES</span>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service">
              <div className="icon">
                <i className="fab fa-codepen" />
              </div>
              <div className="box-num">
                <h2>01</h2>
              </div>
              <div className="text">
                <h3>Branding</h3>
                <p>Phasellus eget neque et lectus pharetra accumsan. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service">
              <div className="icon">
                <i className="fas fa-paint-brush" />
              </div>
              <div className="box-num">
                <h2>02</h2>
              </div>
              <div className="text">
                <h3>Web Design</h3>
                <p>Phasellus eget neque et lectus pharetra accumsan. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service">
              <div className="icon">
                <i className="fas fa-chart-line" />
              </div>
              <div className="box-num">
                <h2>03</h2>
              </div>
              <div className="text">
                <h3>Search optimization</h3>
                <p>Phasellus eget neque et lectus pharetra accumsan.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service">
              <div className="icon">
                <i className="fas fa-laptop-code" />
              </div>
              <div className="box-num">
                <h2>04</h2>
              </div>
              <div className="text">
                <h3>Web Development</h3>
                <p>Phasellus eget neque et lectus pharetra accumsan. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service">
              <div className="icon">
                <i className="fas fa-desktop" />
              </div>
              <div className="box-num">
                <h2>05</h2>
              </div>
              <div className="text">
                <h3>User Interface</h3>
                <p>Phasellus eget neque et lectus pharetra accumsan. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service">
              <div className="icon">
                <i className="far fa-life-ring" />
              </div>
              <div className="box-num">
                <h2>06</h2>
              </div>
              <div className="text">
                <h3>Help &amp; Support</h3>
                <p>Phasellus eget neque et lectus pharetra accumsan. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="counters" id="counter-animate">
      <div className="narrow-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12"> 
              <div className="col-md-3 text-center">
                <span className="counter js-counter" data-from={0} data-to={7520} data-speed={5000} data-refresh-interval={50} />
                <span className="counter-label">Project</span>
              </div>
              <div className="col-md-3 text-center">
                <span className="counter js-counter" data-from={0} data-to={5450} data-speed={5000} data-refresh-interval={50} />
                <span className="counter-label">Clients</span>
              </div>
              <div className="col-md-3 text-center">
                <span className="counter js-counter" data-from={0} data-to={6876} data-speed={5000} data-refresh-interval={50} />
                <span className="counter-label">Happy Client</span>
              </div>
              <div className="col-md-3 text-center">
                <span className="counter js-counter" data-from={0} data-to={456} data-speed={5000} data-refresh-interval={50} />
                <span className="counter-label">Awards </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="work" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading">
            <div className="header-page">
              <h2>My Projects</h2>
              <span />
            </div>
            <span className="heading-meta-sub">PORTFOLIO</span>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 px-25 text-center">
            <ul className="work-filter">
              <li className="filter all active" data-filter="*">All</li>
              <li className="filter" data-filter=".branding">Branding</li>
              <li className="filter" data-filter=".web">Web</li>
              <li className="filter" data-filter=".mobile">Mobile</li>
              <li className="filter" data-filter=".photo">Photography</li>
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="work-gallery"> 
              <div className="col-lg-4 col-md-6 col-sm-12 all photo mobile">
                <div className="work">
                  <img className="img-fluid" src="images/work-1.jpg" alt />
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work-single.html">Work 1</a></h3>
                      <span>Branding, Photography</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 all web">
                <div className="work">
                  <img className="img-fluid" src="images/work-2.jpg" alt />
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work-single.html">Work 2</a></h3>
                      <span>Mobile, Web, Branding</span>
                    </div>
                  </div>
                </div>
              </div>          
              <div className="col-lg-4 col-md-6 col-sm-12 all branding web">
                <div className="work">
                  <img className="img-fluid" src="images/work-3.jpg" alt />
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work-single.html">Work 3</a></h3>
                      <span>Mobile, Web</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 all web branding">
                <div className="work">
                  <img className="img-fluid" src="images/work-4.jpg" alt />
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work-single.html">Work 4</a></h3>
                      <span>Web, Branding</span>
                    </div>
                  </div>
                </div>
              </div>            
              <div className="col-lg-4 col-md-6 col-sm-12 all mobile">
                <div className="work">
                  <img className="img-fluid" src="images/work-5.jpg" alt />
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work-single.html">Work 5</a></h3>
                      <span>Mobile, Photography</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 all branding">
                <div className="work">
                  <img className="img-fluid" src="images/work-6.jpg" alt />
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work-single.html">Work 6</a></h3>
                      <span>Web, Branding</span>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" className="bg-section bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading">
            <div className="header-page">
              <h2>Blog</h2>
              <span />
            </div>
            <span className="heading-meta-sub">BLOG</span>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="blog">
              <a href="blog.html"><img className="img-responsive" src="images/img-1.jpg" alt /></a>
              <div className="blog-text">
                <span className="posted_on">21 Nov 2019</span>
                <h3><a href="blog.html">ALIQUAM IN PELLENTESQUE LIBERO.</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vitae felis non.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog">
              <a href="blog.html"><img className="img-responsive" src="images/img-2.jpg" alt /></a>
              <div className="blog-text">
                <span className="posted_on">21 Nov 2019</span>
                <h3><a href="blog.html">ALIQUAM IN PELLENTESQUE LIBERO.</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vitae felis non.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog">
              <a href="blog.html"><img className="img-responsive" src="images/img-3.jpg" alt /></a>
              <div className="blog-text">
                <span className="posted_on">21 Nov 2019</span>
                <h3><a href="blog.html">ALIQUAM IN PELLENTESQUE LIBERO.</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vitae felis non.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading">
            <div className="header-page">
              <h2>Get In Touch</h2>
              <span />
            </div>
            <span className="heading-meta-sub">CONTACT</span>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-md-push-1">
            <ul className="contact-info">
              <li><i className="fas fa-map-marked-alt" />123 West 21th Street, New York NY</li>
              <li><i className="fas fa-phone-alt" />+123 456-789-000</li>
              <li><i className="fas fa-envelope" /><a href="#">gwyn.g@email.com</a></li>
              <li><i className="fas fa-globe" /><a href="#">www.yoursite.com</a></li>
            </ul>
          </div>
          <div className="col-md-7 col-md-push-1">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea name="message" className="form-control" id="message" cols={30} rows={7} placeholder="Message" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-right">
                  <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div id="footer">
        <div className="container">
          <div className="row copy-right">
            <div className="col-md-6 col-md-offset-3 text-center">
              <h2><a className="footer-logo" href="index.html">Gwyn</a></h2>
              <p className="social-icon">
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-twitter-square" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-dribbble" /></a>
              </p>
              <p><a href="templateshub.net">Templateshub</a></p>
            </div>
          </div>
        </div>
      </div>
      <a id="back-to-top" href="#"><i className="fas fa-chevron-up" /></a>
    </footer>
  </div>
</div>
</div>
    )
}

export default Main
