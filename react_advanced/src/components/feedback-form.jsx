import React, { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "good"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        {/* Message Input */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message"
            rows="4"
          ></textarea>
        </div>

        {/* Rating Select */}
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating:</label>
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

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export { FeedbackForm };
