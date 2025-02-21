import { useState } from "react";

const BirthdayMailingList = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthMonth: "",
    birthDay: "",
    email: "",
    phone: ""
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({});

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (month) => {
    if (["April", "June", "September", "November"].includes(month)) return 30;
    if (month === "February") return 29; // Considering leap year possibility
    return 31;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    // Reset day to 1 if the current selection is out of bounds for the new month
    if (e.target.id === "birthMonth" && formData.birthDay > getDaysInMonth(e.target.value)) {
      setFormData((prev) => ({
        ...prev,
        birthDay: "1",
      }));
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required.";
    if (!formData.birthMonth) errors.birthMonth = "Birth month is required.";
    if (!formData.birthDay) errors.birthDay = "Birth day is required.";
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

    const birthdate = `2000-${String(months.indexOf(formData.birthMonth) + 1).padStart(2, '0')}-${String(formData.birthDay).padStart(2, '0')}`;

    try {
      const response = await fetch("https://bday-787u.onrender.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          birthdate,
          email: formData.email,
          phone: formData.phone ? `+1${formData.phone}` : "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("✅ Your email has been added to my birthday mailing list! 🚀");
        setFormData({
          firstName: "",
          lastName: "",
          birthMonth: "",
          birthDay: "",
          email: "",
          phone: "",
        });
        setErrors({});
        setTimeout(() => setResponseMessage(""), 5000);
      } else {
        // Handle duplicate email and phone errors
        let newErrors = {};
        if (data.error) {
          if (data.error.includes("Email is already in use")) {
            newErrors.email = "⚠️ This email is already registered. Please use a different email.";
          }
          if (data.error.includes("Phone number is already in use")) {
            newErrors.phone = "⚠️ This phone number is already registered. Please use a different phone number.";
          }
        }
        setErrors(newErrors);
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
          {errors.firstName && <p className="text-red-500 text-sm mb-2">{errors.firstName}</p>}

          <input
            type="text"
            id="lastName"
            placeholder="Last Name (optional)"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />

          <label className="font-bold">Date of Birth</label>
          <div className="flex gap-2 mb-2">
            <select
              id="birthMonth"
              value={formData.birthMonth}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded-md"
            >
              <option value="" disabled>Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>

            <select
              id="birthDay"
              value={formData.birthDay}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded-md"
            >
              <option value="" disabled>Select Day</option>
              {[...Array(getDaysInMonth(formData.birthMonth))].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          {errors.birthMonth && <p className="text-red-500 text-sm mb-2">{errors.birthMonth}</p>}
          {errors.birthDay && <p className="text-red-500 text-sm mb-2">{errors.birthDay}</p>}

          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

          <input
            type="tel"
            id="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
          />
          {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

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
