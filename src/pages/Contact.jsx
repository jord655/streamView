import "../CSS/Contact.css"

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Me</h1>
        <p className="intro">
          Feel free to reach out for collaborations, freelance work, internships, mentorship
          or donations to support my projects.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <h3>Full Name</h3>
            <p>Jordan Dike</p>
          </div>

          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:daviddike930@gmail.com">
             daviddike930@gmail.com
            </a>
          </div>

          <div className="info-item">
            <h3>Phone</h3>
            <a href="tel:+2348132330007">
              +234 8132330007
            </a>
          </div>

      

          <div className="info-item">
            <h3>Address</h3>
            <p>Abuja, Nigeria</p>
          </div>

          <div className="info-item">
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/crusader_natus"
              target="_blank"
              rel="noreferrer"
            >
              crusader_natus
            </a>
          </div>

          <div className="info-item">
            <h3> Github</h3>
            <a
              href="https://www.github.com/jord655"
              target="_blank"
              rel="noreferrer"
            >
              jord655
            </a>
          </div>

          <div className="info-item">
            <h3>Linkedln</h3>
            <a
              href="https://www.linkedin.com/in/jordan-dike-476078345"
              target="_blank"
              rel="noreferrer"
            >
              David Jordan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;