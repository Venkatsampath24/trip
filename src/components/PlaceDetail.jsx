import React from "react";

const PlaceDetail = ({ place }) => {
  return (
    <div className="place-detail mb-4">
      <h2 className="text-xl font-semibold">{place.name}</h2>
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />
      <p className="text-gray-700">{place.description}</p>
    </div>
  );
};

export default PlaceDetail;
