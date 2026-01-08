// src/components/EmailOnboarding.tsx

import React, { useState } from "react";

interface EmailOnboardingProps {
  openModal: boolean;
  closeModal: () => void;
}

const EmailOnboarding: React.FC<EmailOnboardingProps> = ({
  openModal,
  closeModal,
}) => {
  const [role, setRole] = useState<"sender" | "courier" | null>(null);
  const [email, setEmail] = useState("");

  if (!openModal) return null;

  const handleSubmit = () => {
    // For now, just log — integrate your onboarding logic here
    console.log("Email:", email, "Role:", role);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Welcome to DRODO</h2>
        <p className="text-gray-600 mb-6">
          Start exploring DRODO before connecting a wallet. Choose your role
          and provide an email to get started.
        </p>

        {/* Role Selection */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setRole("sender")}
            className={`flex-1 py-2 rounded-lg border ${
              role === "sender"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-800 border-gray-300"
            } transition`}
          >
            Sender
          </button>
          <button
            onClick={() => setRole("courier")}
            className={`flex-1 py-2 rounded-lg border ${
              role === "courier"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-800 border-gray-300"
            } transition`}
          >
            Courier
          </button>
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          disabled={!role || !email}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            role && email
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailOnboarding;
