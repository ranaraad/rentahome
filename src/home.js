import React from "react";
import { Search } from "lucide-react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { propertyData } from "./search";
import PropertyCard from "./propertyCard";

const HomePage = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-violet-900 mb-4">
            Welcome to RanaHome
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Finding a safe and comfortable home shouldn't be a challenge. We
            connect displaced individuals with compassionate hosts offering
            temporary housing solutions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                placeholder="Search for housing in your desired location..."
                className="w-full"
              />
            </div>
            <Button className="bg-violet-700 hover:bg-violet-900">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {propertyData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
