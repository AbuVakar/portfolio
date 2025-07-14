import React from 'react';

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
        <button
          aria-label="Close Privacy Policy"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 text-2xl font-bold focus:outline-none"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Privacy Policy</h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto">
          <p>Your privacy is important to me. This portfolio website collects minimal personal information and is committed to protecting your data:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>No personal data is collected automatically when you visit this site.</li>
            <li>If you use the contact form, your name, email, and message are used solely for communication and will not be shared with third parties.</li>
            <li>This site may use third-party services (like EmailJS) to process contact form submissions securely.</li>
            <li>No cookies or tracking scripts are used for advertising or analytics purposes.</li>
            <li>You may request deletion of your contact information at any time by reaching out via the contact form.</li>
          </ul>
          <p>By using this site, you consent to this privacy policy. For any privacy-related questions, please contact me directly.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal; 