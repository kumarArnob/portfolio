import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_y6trbc9', 'template_c1q1bqf', e.target, 'user_sGfgiBvMUmt9p0it1AecM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("message sent . Thank you  ")
  }


    
    return (
        <div>
        <section id="contact" className="bg-light pt-0">
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
          <li><i className="fas fa-map-marked-alt" /> 644A/3 Ashoknagar , 24 pgs(N) , WB </li>
          <li><i className="fas fa-phone-alt" />7980817947</li>
          <li><i className="fas fa-envelope" /><a href="#">mail2arnb@gmail.com</a></li>
          
        </ul>
      </div>
      <form onSubmit={sendEmail}>
      <div className="col-md-7 col-md-push-1">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name"  name="name"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Email" name="email" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea name="message" className="form-control" id="message" cols={30} rows={7} placeholder="Message" defaultValue={""} name="message" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group text-right">
              <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
        </form>
    </div>
  </div>
</section>

        </div>
    )
}

export default Contact
