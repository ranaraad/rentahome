import React from "react";
import { Button } from "./components/ui/button";

const PropertyModal = ({ property, isOpen, onClose, onInquire, inquiryMessage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-violet-900">{property.title}</h2>
        <p className="text-gray-700 mt-2">Location: {property.location}</p>
        <p className="text-gray-700">Price: {property.price}</p>
        <p className="text-gray-700">Bedrooms: {property.bedrooms}</p>
        <p className="text-gray-700 mt-2">Landlord's Name: {property.landlord.name}</p>
        <p className="text-gray-700">Email: {property.landlord.email}</p>
        <p className="text-gray-700">Phone: {property.landlord.phone}</p>

        <Button
          onClick={onInquire}
          className="mt-4 w-full py-2 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-md"
        >
          Inquire or Schedule a Visit
        </Button>

        <button
          className="mt-4 w-full py-2 bg-gray-600 hover:bg-gray-800 text-white font-semibold rounded-md"
          onClick={onClose}
        >
          Close
        </button>

        {/* Display the inquiry message if it's set */}
        {inquiryMessage && (
          <div className="mt-4 p-3 bg-violet-100 text-violet-700 rounded">
            {inquiryMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyModal;
