import React from 'react';

const CreditCardPayment = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans text-gray-800">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The Best Choice for Online Credit Card Payment
      </h1>
      
      {/* Description */}
      <p className="text-center text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      
      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>
      
      {/* Credit Card Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Apply Credit Card</h2>
          <a href="#" className="text-blue-600 font-medium hover:underline flex items-center">
            Learn More 
            <span className="ml-1">→</span>
          </a>
        </div>
        
        {/* Rating Section */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex text-yellow-400 mb-1">
            {'★'.repeat(5)}
          </div>
          <p className="text-gray-600">Over 2k+ Active Users</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPayment;