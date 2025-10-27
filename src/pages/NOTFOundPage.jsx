// src/pages/NotFoundPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";


/**
 * NotFoundPage
 * - Tailwind-based responsive 404 page
 * - Accessible: semantic HTML + keyboard focus styles
 * - Uses framer-motion for a subtle entrance
 *
 * Replace illustration URL or remove the <img> if you have your own asset.
 */

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#F7FBF9] flex items-center justify-center px-6">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        aria-labelledby="notfound-heading"
      >
        {/* Left column: copy + actions */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E6F8F3] text-[#0F6C5B] font-medium text-sm">
            404 — Page not found
          </span>

          <h1
            id="notfound-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b2a27] leading-tight"
          >
            Oops — we can’t find that page.
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            The page you’re looking for doesn’t exist or may have been moved.
            Try going back to the homepage or check the URL for typos.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 bg-[#22776f] hover:bg-[#195E54] text-white px-5 py-3 rounded-full font-medium shadow-md focus:outline-none focus:ring-4 focus:ring-[#CFF4EA] transition"
              aria-label="Go to Home"
            >
              <ArrowLeft size={18} /> Back to Home
            </button>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#22776f] text-[#22776f] px-5 py-3 rounded-full font-medium hover:bg-[#F0FBF9] focus:outline-none focus:ring-4 focus:ring-[#CFF4EA] transition"
              aria-label="Contact support"
            >
              Contact Support
            </a>
          </div>

          <small className="text-xs text-gray-400">
            If you think this is an error, please let us know — we’ll help fix it.
          </small>
        </div>

        {/* Right column: illustration */}
        <div className="flex items-center justify-center">
          {/* Replace src with your local SVG/PNG or keep the placeholder */}
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0d1c3f5a6b2c2f8b0ee1a77db6d9b6e6"
            alt="abstract 404 illustration"
            className="w-full max-w-md lg:max-w-lg object-contain rounded-xl shadow-lg"
          />
        </div>
      </motion.section>
    </main>
  );
};

export default NotFoundPage;
