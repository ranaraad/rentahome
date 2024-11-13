import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const PostListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: 300, // Default price for slider
    propertyType: "",
    images: [],
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Property listed successfully!");
    setFormData({
      title: "",
      description: "",
      location: "",
      price: 300, // Reset price to default
      propertyType: "",
      images: [],
    });
    setTimeout(() => {
      setSuccessMessage('');
    }, 4000);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-violet-900">
        Post a Rental Listing
      </h2>
      {successMessage && (
        <div className="mb-6 p-3 bg-violet-100 border-l-4 border-violet-500 text-violet-700 rounded">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-medium">Title *</label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the title of the property"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-medium">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded-md p-3 shadow-sm focus:ring-2 focus:ring-violet-400"
            placeholder="Describe the property in detail"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Location Dropdown */}
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-medium">Location *</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-violet-50"
            required
          >
            <option value="" disabled selected>
              Select a location
            </option>
            <option value="Dekeweneh">Dekeweneh</option>
            <option value="Ashrafieh">Ashrafieh</option>
            <option value="Baabda">Baabda</option>
            <option value="Jdeideh">Jdeideh</option>
          </select>
        </div>

        {/* Price Slider */}
            <div className="w-48">
              <h2 className="text-slate-500">Price Range: Up to {formData.price}</h2>
              <input
                type="range"
                name="price"
                min="300"
                max="3000"
                step="100"
                value={formData.price}
                onChange={handleChange}
                className="w-full mt-1"
              />
            </div>

        {/* Property Type Dropdown */}
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-medium">Property Type *</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-48 rounded-md border-0 py-2 px-3 text-slate-500 ring-1 ring-gray-200 bg-violet-50"
            required
          >
            <option value="" disabled selected>
              Select property type
            </option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-medium">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="p-2 border rounded-md file:bg-violet-50 file:text-violet-700 file:rounded file:border-0 file:px-4 file:py-2"
          />
        </div>

        <Button type="submit" className="w-full py-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-md transition-all shadow-md">
          Submit Listing
        </Button>
      </form>
    </div>
  );
};

export default PostListingForm;
