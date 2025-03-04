"use client";
// components/SuccessMessage.tsx
import Image from "next/image";

interface SuccessMessageProps {
  email: string;
  onDismiss: () => void;
}

const SuccessMessage = ({ email, onDismiss }: SuccessMessageProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-xl p-10">
        <div className="mb-6">
          <div className="h-12 w-12 rounded-full bg-red-400 flex items-center justify-center">
            <Image
              src="/assets/images/icon-list.svg"
              alt="Success"
              width={24}
              height={24}
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Thanks for subscribing!
        </h1>

        <p className="text-slate-700 mb-8">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>

        <button
          onClick={onDismiss}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out btn-gradient"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
