import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <>
      {/* <div className="container mt-5 mx-auto px-2"> */}
      <div className="max-w-md w-150 bg-white shadow-md rounded-lg overflow-hidden mx-auto border m-4">
         <div className="p-4">
      <h3 className="text-blue-800 font-bold">{menu.attributes.name}</h3>
      <p>{menu.attributes.desc}</p><br/>
         <p> The Cost is: ${menu.attributes.price} yen</p> <br/>
            <p className="text-red-500">Stock: {menu.attributes.status}</p>
            {/* <img src="{menu.attributes.image}" alt={menu.name }/> */}
          </div> 
        </div>
        {/* </div> */}
      </>
  );
};

export default MenuCard;
