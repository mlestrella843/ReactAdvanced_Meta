import React, { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "good",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill out all fields!");
      return;
    }
    console.log("Feedback submitted:", formData);
  };

  return (
    <div className="container mt-4 m-6 p-6 border-2 border-gray-300 rounded">
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm bg-light"
      >
        {/* Name Input */}
        <div className="m-2 p-2 text-gray-400 font-sans font-bold">
          <label htmlFor="name" className="text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="ml-2"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        {/* Message Input */}
        <div className=" m-2 p-2">
          <div>
            <label htmlFor="message" className="text-gray-700">
              Message:
            </label>
          </div>
          <textarea
            id="message"
            name="message"
            className="border-2 border-blue-400 px-800 h-100"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message"
            cols={50}
            rows={5}
          ></textarea>
        </div>

        {/* Rating Select */}
        <div className="m-2 p-2">
          <label htmlFor="rating" className="form-label">
            Rating:
          </label>
          <select
            id="rating"
            name="rating"
            className="form-select"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <div className="m-2 p-2">
          {/* Submit Button */}
          <button type="submit" className="bg-blue-400 border-2 border-gray-500 text-white p-2 rounded">
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}
export { FeedbackForm };
