import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vjlolmq", // Replace with your EmailJS service ID
        "template_28msvzc", // Replace with your EmailJS template ID
        formData,
        "E0K2QtFvDrZhOlDPN" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-white flex items-center justify-center p-6 dark:bg-black "
    >
      <div className="bg-white dark:bg-black rounded-lg p-8 w-full max-w-5xl flex flex-col md:flex-row items-center">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left dark:text-white">
            Do you wanna talk to me!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm dark:bg-black"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm dark:bg-black"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm dark:bg-black"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black dark:bg-white dark:text-black text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Abdunesr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-400"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="www.linkedin.com/in/abdelah-nesredin-a6058b318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 dark:text-white dark:hover:text-gray-400"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/abd_nesr7/e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 dark:text-white dark:hover:text-gray-400"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://medium.com/@nesredinabdelah33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-400"
            >
              <FaMedium size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
