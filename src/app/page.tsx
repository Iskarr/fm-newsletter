"use client";
// components/NewsletterSignup.tsx
import { useState } from "react";

interface NewsletterFeature {
  text: string;
}

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const features: NewsletterFeature[] = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more!" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Subscribing email:", email);
    // Reset form or show success message
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 p-4">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-xl">
        {/* Left side - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Stay updated!
          </h1>

          <p className="text-slate-700 mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0">
                  <div className="h-5 w-5 rounded-full bg-red-400 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-slate-700">{feature.text}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-red-400 to-pink-500 p-6 relative">
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Browser mockup with dashboard */}
            <div className="relative w-full max-w-md">
              <div className="bg-slate-800 rounded-t-lg h-8 flex items-center px-3">
                <div className="flex space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="bg-slate-100 rounded-b-lg p-4 shadow-lg">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="h-2 bg-slate-300 rounded mb-3"></div>
                    <div className="h-2 bg-slate-300 rounded mb-3 w-4/5"></div>
                    <div className="h-2 bg-slate-300 rounded mb-3 w-3/5"></div>
                  </div>
                  <div className="w-1/2 bg-white p-2 rounded">
                    <div className="h-16 flex justify-end items-end">
                      <div className="w-1/2 h-12 bg-red-300 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meter circle */}
              <div className="absolute -bottom-12 -right-8 bg-white rounded-lg shadow-lg p-3">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-red-300 to-red-400 flex items-center justify-center border-4 border-white">
                  <span className="text-slate-800 font-bold text-xl">94</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
