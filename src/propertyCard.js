import React, { useState } from "react";
import { Button } from "./components/ui/button";
import prop1 from "./propertypictures/prop1.webp";
import prop2 from "./propertypictures/prop2.webp";
import prop3 from "./propertypictures/prop3.jpeg";
import PropertyModal from "./propertyModal";

export const propertyData = [
  {
    id: 1,
    image: prop1,
    title: "Cozy Apartment",
    location: "Ashrafieh",
    price: "$1200/month",
    bedrooms: 2,
    propertyType: "Apartment",
    description: "A cozy two-bedroom apartment in the heart of Ashrafieh. Close to shops, restaurants, and public transport.",
    landlord: {
      name: "Rana Raad",
      email: "ranaraad@gmail.com",
      phone: "76666666"
    }
  },
  {
    id: 2,
    image: prop2,
    title: "Spacious House",
    location: "Jdeideh",
    price: "$2500/month",
    bedrooms: 4,
    propertyType: "House",
    description: "A spacious family home with a beautiful garden and a large living area, located in a quiet neighborhood.",
    landlord: {
      name: "Elie Raad",
      email: "elieraad@gmail.com",
      phone: "79999999"
    }
  },
  {
    id: 3,
    image: prop3,
    title: "Modern Studio",
    location: "Baabda",
    price: "$800/month",
    bedrooms: 1,
    propertyType: "Studio",
    description: "A modern studio apartment with stylish furnishings and amenities. Ideal for young professionals.",
    landlord: {
      name: "Charbel Raad",
      email: "charbelraad@gmail.com",
      phone: "71111111"
    }
  }
];

const PropertyCard = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState("");

  const handleInquire = () => {
    setInquiryMessage("Your inquiry has been sent! We'll reach out to you soon!");
    setTimeout(() => setInquiryMessage(""), 4000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{property.title}</h2>
      <p className="text-gray-600">Location: {property.location}</p>
      <p className="text-gray-600">Property Type: {property.propertyType}</p>
      <p className="text-gray-600">Price: {property.price}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-violet-700 hover:bg-violet-900 text-sm px-3 py-1"
        >
          More Details
        </Button>
      </div>

      <PropertyModal
        property={property}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onInquire={handleInquire}
        inquiryMessage={inquiryMessage}
      />
    </div>
  );
};

export default PropertyCard;
