import React from "react";

const AttractionListCard = ({ attractions }) => {
  return (
    <div className="max-w-md w-150 bg-white shadow-md rounded-lg overflow-hidden mx-auto border m-2">
    <div className="p-4">
 <h3 className="text-blue-800 font-bold">{attractions.name}</h3>
 <p>{attractions.description}</p><br/>
    <p> The Location is: {attractions.location} </p> <br/>
       
     </div> 
   </div>
  );
};

export default AttractionListCard;
