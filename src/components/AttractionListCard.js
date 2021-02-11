import React from "react";

const AttractionListCard = ({ attractions }) => {
  return (
      <div>
          <br></br>
      {attractions.name.name}<br/>
      {attractions.description}<br/>
      {attractions.location}
    </div>
  );
};

export default AttractionListCard;