import React from "react";

const PropertyCard = ({ property }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-48 object-cover rounded-md"
    />
    <h2 className="text-lg font-bold mt-2">{property.title}</h2>
    <p className="text-gray-600">Location: {property.location}</p>
    <p className="text-gray-600">Price: {property.price}</p>
    <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
  </div>
);

export default PropertyCard;
