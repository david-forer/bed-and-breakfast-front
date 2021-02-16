import React from "react";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import { Link } from "react-router-dom";

const Cafe = () => {
  return (
    <>
      <div>
        <Hero hero="cafeHero">
          <Banner
            title="The Deck Cafe"
            subtitle="Incredible Fresh Food -
                            Look below for our current menu"
          >
            {/* <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link> */}
          </Banner>
        </Hero>
        <h1 className="font-bold text-4xl leading-4 text-center  p-8 bg-gray-100 text-indigo-500">
          Menu
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-8 m-4">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Cafe;
