"use client";
// components/NewsletterSignup.tsx
import { useState } from "react";
import Image from "next/image";
import SuccessMessage from "./SuccessMessage";

interface NewsletterFeature {
  text: string;
}

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const features: NewsletterFeature[] = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more!" },
  ];

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error state when user starts typing again
    if (isError) {
      setIsError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email is valid
    if (!validateEmail(email)) {
      setIsError(true);
      return;
    }

    // If email is valid, proceed with form submission
    console.log("Subscribing email:", email);
    setSubmittedEmail(email); // Store the email for the success message
    setIsSubmitted(true); // Show success component
    setEmail("");
    setIsError(false);
  };

  const handleDismiss = () => {
    // Reset the form and go back to the signup screen
    setIsSubmitted(false);
    setSubmittedEmail("");
  };

  // If form is successfully submitted, show the success message
  if (isSubmitted) {
    return <SuccessMessage email={submittedEmail} onDismiss={handleDismiss} />;
  }

  // Otherwise, show the signup form
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 p-4">
      <div className="flex flex-col max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-xl">
        {/* Image section - moved to top on mobile */}
        <div className="md:hidden w-full p-0">
          <div className="relative w-full">
            <Image
              src="assets/images/illustration-sign-up-mobile.svg"
              alt="Newsletter"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Main content container - reordered for mobile first */}
        <div className="flex flex-col md:flex-row w-full">
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
                      <Image
                        src="/assets/images/icon-list.svg"
                        alt="Checkmark"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <span className="text-slate-700">{feature.text}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  {isError && (
                    <span className="text-red-500 text-sm italic">
                      Valid email required
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="email"
                  placeholder="email@company.com"
                  autoComplete="off"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 border rounded-lg outline-none text-black ${
                    isError
                      ? "error-state bg-red-50 border-red-500 text-red-500"
                      : "border-gray-300"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out btn-gradient"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>

          {/* Right side - Image (hidden on mobile) */}
          <div className="hidden md:block md:w-1/2 p-6 relative">
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src="assets/images/illustration-sign-up-desktop.svg"
                alt="Newsletter"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
