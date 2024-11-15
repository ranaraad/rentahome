import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import PropertyCard from "./propertyCard";
import { propertyData } from "./propertyCard";


const SearchPage = () => {
  const [price, setPrice] = useState(300);
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mt-8 text-violet-900">Search Listings</h1>
      <div className="mt-12">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="w-48">
            <h2 className="text-slate-500">Price Range: Up to {price}</h2>
            <input
              type="range"
              id="priceRange"
              min="300"
              max="3000"
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
            className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-slate-50"
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
          <Button className="bg-violet-700 hover:bg-violet-800">
            Apply Filters
          </Button>
        </div>
        {/* Display property cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
