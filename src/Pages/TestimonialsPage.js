import React from 'react'
import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
const TestimonialsPage = () => {
  return (
    <div>
       <section className="testimonial-page">
        
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
        
      </section>
    </div>
  )
}

export default TestimonialsPage
