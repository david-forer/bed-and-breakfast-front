import React, { Component } from 'react'
import { FaCoffee, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Amenities extends Component {
  state = {
    amenities: [
      {
        icon: <FaCoffee />,
        title: "Free Breakfast",
        info:
          "We offer a full breakfast when you stay with us. Not just coffee and old donuts. Get filled up for the big day!",
      },
      {
        icon: <FaHiking />,
        title: "Outdoor activities",
        info:
          "Hiking, Biking, Surfing, Boating, Scuba Diving or Snorkeling.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle from Airport",
        info:
          "We have a boat that picks you up right by the airport and you are only 10 minutes away.",
      },
      {
        icon: <FaBeer />,
        title: "Free Happy Hour",
        info:
          "That is right. Everyday at 5 we put out beers and wine with snacks for you toenjoy while watching the ocean.",
      },
    ],
  };
  render() {
    return (
      <section className="amenities p-12 bg-gray-100 tracking-wide text-center">
        <Title title="AMENITIES" />
        <div className="amenities-center grid lg:grid-cols-4 gap-16 sm:grid-cols-1 md:grid-cols-2 border-red-500">
          {this.state.amenities.map((item) => {
            return (
              <article key={`item-${item.title}`} className="">
                <span className="text-indigo-400 text-5xl mb-6 inline-block">{item.icon}</span>
                <h6 className="uppercase">{item.title}</h6>
                <p className="md:m-8 sm:m-16">{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
