import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner";

import Jungalows from '../components/Jungalows'

const Rooms = () => {
  return (
      <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms" subtitle="Our Jungalows for you">
          
        </Banner>
      </Hero>
      <h1 className="font-bold text-4xl leading-4 text-center p-8 bg-gray-100 text-indigo-500">The Jungalows</h1>
      <Jungalows />
      </>
    );
}

export default Rooms
