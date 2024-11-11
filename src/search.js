import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const propertyData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Cozy Apartment",
    location: "New York, NY",
    price: "$1200/month",
    bedrooms: 2,
    propertyType: "Apartment",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Spacious House",
    location: "Los Angeles, CA",
    price: "$2500/month",
    bedrooms: 4,
    propertyType: "House",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Modern Studio",
    location: "San Francisco, CA",
    price: "$1800/month",
    bedrooms: 1,
    propertyType: "Studio",
  },
];

const SearchPage = () => {
  const [price, setPrice] = useState(300);
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mt-8">Search Listings</h1>
      <div className="mt-12">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="w-48">
            <h2 className="text-slate-500">Price Range: Up to {price}</h2>
            <input
              type="range"
              id="priceRange"
              min="300"
              max="2000"
              step="100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-1"
            />
          </div>
          <div>
            <select className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-slate-50">
              <option value="" disabled selected>
                Location
              </option>
              <option value="jdeideh">Jdeideh</option>
              <option value="baabda">Baabda</option>
              <option value="ashrafieh">Ashrafieh</option>
              <option value="dekweneh">Dekweneh</option>
            </select>
          </div>
          <Input
            type="number"
            placeholder="Bedrooms"
            className="w-48"
            min="1"
            max="4"
            onKeyDown={(e) => {
              if (e.key === "-") {
                e.preventDefault();
              }
            }}
          />
          <div>
            <select className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-slate-50">
              <option value="" disabled selected>
                Property Type
              </option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="studio">Studio</option>
            </select>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Apply Filters
          </Button>
        </div>
        {/* Display property cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyData.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
