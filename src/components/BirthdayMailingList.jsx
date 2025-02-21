import { useState } from "react";

const BirthdayMailingList = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    email: "",
    phone: ""
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required.";
    if (!formData.birthdate.trim()) errors.birthdate = "Birthdate is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
        errors.email = "Enter a valid email.";
    }
    if (formData.phone && !formData.phone.match(/^\d{10}$/)) {
      errors.phone = "Enter a valid 10-digit phone number.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      const response = await fetch("https://bday-787u.onrender.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, phone: `+1${formData.phone}` })
      });

      if (response.ok) {
        setResponseMessage("✅ Your email has been added to my birthday mailing list! 🚀");
        setFormData({ firstName: "", lastName: "", birthdate: "", email: "", phone: "" });
        setTimeout(() => setResponseMessage(""), 5000);
      } else {
        setResponseMessage("❌ Error adding user.");
      }
    } catch {
      setResponseMessage("❌ Error connecting to server.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-6 bg-gray-100 sm:h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-base font-bold sm:text-xl">Join My Birthday Mailing List 🎉</h2>
        <p className="text-gray-700">Want to receive a birthday email in your inbox? Add your details, and I'll send you a special email on your birthday!</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          
          <input
            type="text"
            id="lastName"
            placeholder="Last Name (optional)"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          
          <label htmlFor="birthdate" className="font-bold">Date of birth</label>
          <input
            type="date"
            id="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          {errors.birthdate && <p className="text-red-500 text-sm">{errors.birthdate}</p>}
          
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md mt-2 hover:bg-blue-800">Submit</button>
        </form>
        <p className="text-center text-green-600 mt-2">{responseMessage}</p>
      </div>
      <div className="mt-4 text-center text-gray-700">
        Made with ❤️ by <a href="https://www.linkedin.com/in/sureshcstha" target="_blank" className="text-blue-600 font-bold hover:underline">Suresh Shrestha</a>
      </div>
    </div>
  );
};

export default BirthdayMailingList;
