import React, { useState } from "react";

const WEB3FORMS_KEY = "088409e4-8861-485e-ba5d-a64040c1c649"; // your Web3Forms access key

const Booking = () => {
  const [form, setForm] = useState({
    service: "Birthday Party Planning",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    details: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const data = new FormData();

      // Required by Web3Forms
      data.append("access_key", WEB3FORMS_KEY);

      // Useful fields
      data.append("subject", `New booking from ${form.name || "visitor"}`);
      data.append("replyto", form.email || ""); // Web3Forms uses 'replyto' for autoresponder

      // Append all form fields
      data.append("service", form.service);
      data.append("name", form.name);
      data.append("phone", form.phone);
      data.append("email", form.email);
      data.append("date", form.date);
      data.append("time", form.time);
      data.append("details", form.details);

      // Optional: send admin a copy (may require verification in Web3Forms dashboard)
      data.append("_cc", "kirtipandeykp2000@gmail.com"); // change/remove if you like

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await res.json();

      // Web3Forms returns { success: true, message: '...'} on success
      if (res.ok && (result.success || result.message === "success")) {
        setMessage({ type: "success", text: "Booking submitted! We will contact you soon." });
        setForm({
          service: "Birthday Party Planning",
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          details: ""
        });
      } else {
        // try to show helpful error
        const err = result.error || result.errors || result.message || "Submission failed";
        setMessage({ type: "error", text: typeof err === "string" ? err : "Submission failed. Try again." });
        console.error("Web3Forms error:", result);
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Network error — try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary min-h-screen py-16" style={{ color: "#190A40" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ color: "#190A40" }}>
        <div className="grid lg:grid-cols-2 gap-8 items-start" style={{ color: "#190A40" }}>
          {/* Left Column - Form */}
          <div>
            <div className="mb-8" data-aos="fade-up" data-aos-offset="200">
              <h1 className="text-4xl font-extrabold text-accent sm:text-5xl font-serif mb-4" style={{ color: "#190A40" }}>
                Book Online Now
              </h1>
              <p className="text-xl text-gray-500" style={{ color: "#190A40" }}>
                Request an appointment to get a call back from our expert planners.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8" data-aos="fade-up" data-aos-offset="200">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ color: "#190A40" }}>Service Required *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary bg-white"
                  >
                    <option>Birthday Party Planning</option>
                    <option>Wedding Anniversary</option>
                    <option>Custom Cake Order</option>
                    <option>Event Decoration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ color: "#190A40" }}>Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your full name"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ color: "#190A40" }}>Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+91 1234567890"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ color: "#190A40" }}>Email Address</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="your.email@example.com"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ color: "#190A40" }}>Preferred Date</label>
                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      type="date"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ color: "#190A40" }}>Preferred Time</label>
                    <input
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      type="time"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ color: "#190A40" }}>Additional Details</label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows="3"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    placeholder="Any specific requirements?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white py-3 rounded-lg font-bold transition-colors cursor-pointer"
                  style={{ backgroundColor: '#7FB9A8' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#6f9e91ff'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#7FB9A8'}
                >
                  {loading ? "Submitting..." : "Request Appointment"}
                </button>

                {message && (
                  <p className={`text-center text-sm mt-2 ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message.text}
                  </p>
                )}
              </form>

              <div className="pt-4">
                <p className="text-sm text-gray-600 text-center" style={{ color: "#190A40" }}>
                  We will confirm your appointment via email or phone within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block" data-aos="fade-left" data-aos-offset="200">
            <img
              src="/src/assets/booking-hero.webp"
              alt="Beautiful cherry blossoms"
              className="w-full h-full object-cover rounded-xl shadow-lg"
              style={{ minHeight: '850px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
