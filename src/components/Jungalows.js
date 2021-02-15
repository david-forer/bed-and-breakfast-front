import React from "react";
import RoomData from "../data/rooms.json";
// import image from './images/rooms'

const Rooms = () => {
  return (
    <div>
      {RoomData.map((roomDetail) => {
        return (
          <div className="border m-12 p-4 rounded-lg shadow-lg">
            <h1 className="mb-12 font-bold">{roomDetail.name}</h1>
            <div className="m-4">
              <p className="m-4">
                <span className="font-bold p-4">Bed:</span> {roomDetail.type}
              </p>
              <p className="m-4">
                <span className="font-bold p-4">Price[USD]:</span>{" "}
                {roomDetail.price}
              </p>
              <p className="m-4">
                <span className="font-bold p-4">Room Description:</span>{" "}
                {roomDetail.description}
              </p>
            </div>
            {/* <img src={roomDetail.image} width="100" height="100" alt='' /> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 border bg-gray-100 mt-12 rounded-lg ">
              <div>
                <img
                  className="h-48 w-full object-cover md:w-48 m-8 rounded-lg"
                  src={roomDetail.image}
                  alt="pic"
                ></img>
              </div>
              <div>
                <img
                  className="h-48 w-full object-cover md:w-48 m-8 rounded-lg"
                  src={roomDetail.image1}
                  alt="pic"
                ></img>
              </div>
              <div>
                <img
                  className="h-48 w-full object-cover md:w-48 m-8 rounded-lg"
                  src={roomDetail.image2}
                  alt="pic"
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rooms;
