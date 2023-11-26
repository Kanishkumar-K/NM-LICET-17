import React, { useState } from "react";
import './Home.css';

function AboutUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'India',
    feedback: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      // Form is valid, you can submit the data or perform other actions
      alert('Form submitted successfully!');
      // Add your form submission logic here
    } else {
      alert('Form contains errors. Please check the fields.');
    }
  };

  const validateForm = (data) => {
    // Example validation rules (you can customize these)
    if (!data.name.trim() || !data.email.trim() || !data.feedback.trim()) {
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      return false;
    }

    return true;
  };

  return (
    <>
      {/* ... (your existing code) ... */}

      {/* Contact Section */}
      <section id="contact">
        <div className="container" id="s32">
          <div className="row">
            <br />
            <h2 style={{ textAlign: "center" }}>Contact Us</h2>
            <div className="column1">
              <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Name</label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <label htmlFor="lname">Email</label>
                <input
                  type="text"
                  id="lname"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                </select>

                <label htmlFor="subject"><br />Feedback</label>
                <textarea
                  id="subject"
                  name="feedback"
                  placeholder="Give your feedback.."
                  style={{ height: "150px" }}
                  value={formData.feedback}
                  onChange={handleInputChange}
                />

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
