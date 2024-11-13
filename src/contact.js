import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSuccessMessage('');
    }, 4000);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-gradient-to-r from-white to-blue-50 shadow-lg rounded-lg">
      {/* Mission Statement */}
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">Our Mission</h2>
      <p className="text-gray-700 text-center mb-10 leading-relaxed">
        At RanaHome, our mission is to empower displaced individuals by providing a platform that connects them with rental opportunities. We believe in making safe, affordable housing accessible to everyone, fostering a sense of community and belonging in each home.
      </p>

      {/* Contact Form */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center text-blue-700 mb-4">Contact Us</h3>
        {successMessage && (
          <div className="mb-6 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 font-medium">Name *</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 font-medium">Email *</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 font-medium">Message *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here"
              rows="4"
              required
            />
          </div>

          <Button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all shadow-md">
            Send Message
          </Button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-8 text-blue-600">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Instagram</a>
      </div>
    </div>
  );
};

export default AboutContact;
