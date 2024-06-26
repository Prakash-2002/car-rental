import React from 'react'
import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import { IconLocation } from "@tabler/icons-react";
import Footer from '../component/Footer';
import HeroPages from '../component/HeroPages';

const Contact = () => {
  return (
    <div>
      <section className="contact-page">
      <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 10
                years of experience.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; 8651749102
              </a>
              <a href="/">
                <IconMail /> &nbsp; pjhakumar@gmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Bengalore, India
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Prakash Jha"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="prakash@gmail.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>8651749102</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </div>
  )
}

export default Contact
