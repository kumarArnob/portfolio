import React from "react";


const Footer = () => {

  const goLkdn = ()=>{
    window.open('https://www.linkedin.com/in/kumararnob');
  }
  const goGit = ()=>{
    window.open('https://github.com/kumarArnob');
  }
  return (
    <div>
      <footer>
        <div id="footer">
          <div className="container">
            <div className="row copy-right">
              <div className="col-md-12 text-center">
                {/* Footer logo */}
                <p className="social-icon">
                  <a onClick={goLkdn}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a onClick={goGit}>
                    <i className="fab fa-github" />
                  </a>
                </p>
                <h2>
                  <a className="footer-logo" href="#">
                    A PortFolio Website
                  </a>
                </h2>
              
                <p>
                  <a href="#">
                    Made with{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </a>
                </p>
              </div>
              
            </div>
          </div>
        </div>
       
        <a id="back-to-top" href="#">
          <i className="fas fa-chevron-up" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
