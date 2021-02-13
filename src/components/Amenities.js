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
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, asperiores.",
      },
      {
        icon: <FaHiking />,
        title: "Outdoor activities",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, asperiores.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Shuttle from Airport",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, asperiores.",
      },
      {
        icon: <FaBeer />,
        title: "Free Happy Hour",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, asperiores.",
      },
    ],
  };
  render() {
    return (
      <section className="amenities">
        <Title title="amenities" />
        <div className="amenities-center">
          {this.state.amenities.map((item) => {
            return (
              <article key={`item-${item.title}`} className="amenity">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
