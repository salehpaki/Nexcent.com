import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      alert("Form submitted successfully!");
      navigate("/");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-md sm:max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>

        {submitted ? (
          <div className="text-center text-green-600 text-xl font-semibold">
            ✅ Submission Successful!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-2 text-gray-800"
                required
              />
            </div>

            <div className="flex items-center border-b border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-2 text-gray-800"
                required
              />
            </div>

            <div className="flex items-start border-b border-gray-300 py-2">
              <FaCommentDots className="text-gray-500 mr-2 mt-2" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-2 resize-none text-gray-800"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
