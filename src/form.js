import React, { useState } from "react";
import { propertyData } from "./propertyCard";
import { Button } from "./components/ui/button";


const PostListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: 300,
    propertyType: "",
    images: null,
    fullName: "",
    phone: "",
    email: "",
    bedrooms: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files[0] }); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handletelchange = (e) => {
    const { value } = e.target;
    const numval = value.replace(/\D/g, "");
    setFormData({ ...formData, phone: numval });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProperty = {
      id: Date.now(),
      image: formData.images ? URL.createObjectURL(formData.images) : "",
      title: formData.title,
      location: formData.location,
      price: `$${formData.price}/month`,
      bedrooms: formData.bedrooms,
      propertyType: formData.propertyType,
      description: formData.description,
      landlord: {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
      },
    };

    propertyData.push(newProperty);

    setSuccessMessage("Property listed successfully!");
    setTimeout(() => setSuccessMessage(""), 4000);

    setFormData({
      title: "",
      description: "",
      location: "",
      price: 300,
      propertyType: "",
      images: null,
      fullName: "",
      phone: "",
      email: "",
      bedrooms: "",
    });
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
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handletelchange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Property Location</option>
            <option value="jdeideh">Jdeideh</option>
            <option value="baabda">Baabda</option>
            <option value="ashrafieh">Ashrafieh</option>
            <option value="dekweneh">Dekweneh</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            min="1"
            max="4"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($/month)
          </label>
          <input
            type="range"
            id="price"
            name="price"
            min="300"
            max="3000"
            step="100"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full"
          />
          <div className="text-sm mt-2 text-gray-600">
            Selected Price: ${formData.price}/month
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="studio">Studio</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
            className="p-2 border rounded-md file:bg-violet-50 file:text-violet-700 file:rounded file:border-0 file:px-4 file:py-2"
          />
        </div>
        <Button
          type="submit"
          className="w-full py-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-md transition-all shadow-md"
        >
          Submit Listing
        </Button>
      </form>
    </div>
  );
};

export default PostListingForm;
