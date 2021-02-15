import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Jungalows from '../components/Jungalows'

const Rooms = () => {
  return (
      <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms" subtitle="Our Jungalows for you">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
      <h1 className="font-bold text-center p-8 bg-gray-100">The Jungalows</h1>
      <Jungalows />
      </>
    );
}

export default Rooms
