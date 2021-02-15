import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AttractionList from '../components/AttractionList'

const Attractions = () => {
    return (
        <>
            <div>
        <Hero hero="cafeHero">
          <Banner
            title="Nearby Attractions"
            subtitle="A list of things to see and do in Bocas Del Toro"
          >
            {/* <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link> */}
          </Banner>
        </Hero>
        <h1 className="font-bold text-4xl leading-4 text-center  p-8 bg-gray-100 text-indigo-500">Attractions Page</h1> 
        <div className="grid grid-cols-2 mt-8">
        <AttractionList />
        </div>
      </div>
        <div>
            
            
            </div>
        </>
    )
}

export default Attractions
