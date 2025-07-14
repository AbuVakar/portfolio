import React from 'react';

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
        <button
          aria-label="Close Terms & Conditions"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 text-2xl font-bold focus:outline-none"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Terms & Conditions</h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto">
          <p>Welcome to my personal portfolio website. By accessing or using this site, you agree to the following terms and conditions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>This website is for informational and showcase purposes only. All content, projects, and code samples are my own work unless otherwise stated.</li>
            <li>You may view, share, and reference my work for personal or professional inspiration, but you may not copy or redistribute any content or code as your own without permission.</li>
            <li>All trademarks, logos, and brand names are the property of their respective owners and are used for demonstration purposes only.</li>
            <li>I reserve the right to update or change these terms at any time without prior notice.</li>
            <li>For any questions or collaboration requests, please use the contact form provided on this site.</li>
          </ul>
          <p>Thank you for visiting and respecting my work!</p>
        </div>
      </div>
    </div>
  );
};

export default TermsModal; 