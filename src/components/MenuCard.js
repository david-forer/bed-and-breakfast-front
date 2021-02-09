import React from "react";

const MenuCard = ({ menu }) => {
  return (
      <div>
          <br></br>
      {menu.attributes.name}<br/>
      {menu.attributes.desc}<br/>
      {menu.attributes.price}
    </div>
  );
};

export default MenuCard;
