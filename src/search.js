import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import PropertyCard from "./propertyCard";
import { propertyData } from "./propertyCard";

const SearchPage = () => {
  const [price, setPrice] = useState(300);
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(propertyData);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const applyFilters = () => {
    const filtered = propertyData.filter((property) => {
      const matchesPrice =
        parseInt(property.price.replace(/[^0-9]/g, ""), 10) <= price;
      const matchesLocation = location
        ? property.location.toLowerCase() === location.toLowerCase()
        : true;
      const matchesBedrooms = bedrooms
        ? property.bedrooms <= parseInt(bedrooms, 5)
        : true;
      const matchesPropertyType = propertyType
        ? property.propertyType.toLowerCase() === propertyType.toLowerCase()
        : true;

      return (
        matchesPrice &&
        matchesLocation &&
        matchesBedrooms &&
        matchesPropertyType
      );
    });

    setFilteredProperties(filtered);
    setFiltersApplied(true);
  };

  const removeFilters = () => {
    setPrice(300);
    setLocation("");
    setBedrooms("");
    setPropertyType("");
    setFilteredProperties(propertyData);
    setFiltersApplied(false);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mt-8 text-violet-900">
        Search Listings
      </h1>
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
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-slate-50"
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="jdeideh">Jdeideh</option>
              <option value="baabda">Baabda</option>
              <option value="ashrafieh">Ashrafieh</option>
              <option value="dekweneh">Dekweneh</option>
            </select>
          </div>
          <Input
            type="number"
            value={bedrooms}
            placeholder="Bedrooms"
            className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-slate-50"
            min="1"
            max="4"
            onChange={(e) => setBedrooms(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "-") e.preventDefault();
            }}
          />
          <div>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-slate-50"
            >
              <option value="" disabled>
                Property Type
              </option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="studio">Studio</option>
            </select>
          </div>
          <Button
            onClick={applyFilters}
            className="bg-violet-700 hover:bg-violet-800"
          >
            Apply Filters
          </Button>
          {filtersApplied ? (
            <Button
              onClick={removeFilters}
              className="bg-gray-600 hover:bg-gray-800 text-white"
            >
              Remove Filters
            </Button>
          ) : null}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-6">
            No properties match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
