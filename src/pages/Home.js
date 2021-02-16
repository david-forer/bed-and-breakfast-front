import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Amenities from '../components/Amenities'
import Testimonials from '../components/Testimonials'
import Slider from '../components/Slider'
import { SliderData } from '../data/photos'

// import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <>
            <Hero hero="defaultHero">
        <Banner
          title="Jungalows in the Bocas"
          subtitle="deluxe rooms starting at 100 a night"
        >
          {/* <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link> */}
        </Banner>
            </Hero>
        <Amenities />
        <Slider slides={SliderData} />
        <Testimonials />
        </>
    );
}

export default Home;