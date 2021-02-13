import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Amenities from '../components/Amenities'
// import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <>
            <Hero hero="defaultHero">
        <Banner
          title="Jungalows in Bocas"
          subtitle="deluxe rooms starting at 100. a night"
        >
          {/* <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link> */}
        </Banner>
            </Hero>
            <Amenities />
        </>
    );
}

export default Home;