import React from 'react'
import Hero from "../component/Hero";
import BookCar from "../component/BookCar";
import PlanTrip from "../component/PlanTrip";
import PickCar from "../component/PickCar";
import Banner from "../component/Banner";

import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
    
      <Footer />
    </div>
  )
}

export default Home
