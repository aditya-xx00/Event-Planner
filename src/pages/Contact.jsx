import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const WEB3FORMS_KEY = "9c4e733e-f26d-4ed8-b37d-70d81121ecd0"; // your Web3Forms access key

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMsg("");

        try {
            const data = new FormData();
            data.append("access_key", WEB3FORMS_KEY);
            data.append("name", form.name);
            data.append("email", form.email);
            data.append("phone", form.phone);
            data.append("message", form.message);

            // replyto for autoresponder (Web3Forms uses "replyto")
            data.append("replyto", form.email || "");
            // optional: send admin a copy (some plans require verification)
            data.append("_cc", "kirtipandeykp2000@gmail.com");

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            const result = await res.json();

            // Web3Forms returns JSON with success or error
            if (res.ok && (result.success || result.message === "success")) {
                setResponseMsg("Message sent successfully! We'll get back to you soon.");
                setForm({ name: "", email: "", phone: "", message: "" });
            } else {
                const err = result.error || result.errors || result.message || "Submission failed";
                setResponseMsg(typeof err === "string" ? err : "Submission failed. Try again.");
                console.error("Web3Forms error:", result);
            }
        } catch (error) {
            console.error(error);
            setResponseMsg("Something went wrong. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-primary min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-offset="200">
                    <h1 className="text-4xl font-extrabold text-accent sm:text-5xl font-serif mb-4" style={{ color: "#190A40", fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500" style={{ color: "#190A40" }}>We'd love to hear from you. Let's plan your next big event together!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-offset="200">
                        <h2 className="text-2xl font-bold text-accent font-serif mb-6" style={{ color: "#190A40" }}>Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-red-50 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-accent" style={{ color: "#190A40" }}>Phone</h3>
                                    <p className="text-gray-600" style={{ color: "#190A40" }}>+91-9044201220</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-red-50 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-accent" style={{ color: "#190A40" }}>Email</h3>
                                    <p className="text-gray-600" style={{ color: "#190A40" }}>kirtipandeykp2000@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-red-50 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-accent" style={{ color: "#190A40" }}>Office</h3>
                                    <p className="text-gray-600" style={{ color: "#190A40" }}>IIT Road Kalindipuram, Prayagraj</p>
                                    <p className="text-gray-600" style={{ color: "#190A40" }}>Uttar Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-offset="200">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" style={{ color: "#190A40" }}>Name</label>
                                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="Your Name" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" style={{ color: "#190A40" }}>Email</label>
                                <input name="email" value={form.email} onChange={handleChange} required type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="you@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" style={{ color: "#190A40" }}>Phone Number</label>
                                <input name="phone" value={form.phone} onChange={handleChange} required type="tel" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="+91 1234567890" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" style={{ color: "#190A40" }}>Message</label>
                                <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" placeholder="Tell us about your event..." />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center items-center px-4 py-2 rounded-md shadow-sm text-white bg-secondary transition-all duration-300 cursor-pointer"
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#e49f9fff';
                                    e.target.style.opacity = '0.85';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '';
                                    e.target.style.opacity = '1';
                                }}
                            >
                                {loading ? "Sending..." : <><Send className="h-4 w-4 mr-2" /> Send Message</>}
                            </button>

                            {responseMsg && <p className="text-center text-sm mt-2 text-green-600">{responseMsg}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;