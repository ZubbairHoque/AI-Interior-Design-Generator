import React from "react";

function AdditionalInformation() {
  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor="additional-info" className="block text-slate-700 mb-2">
        Additional Information
      </label>
      <input
        type="text"
        id="additional-info"
        placeholder="Enter additional information here"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default AdditionalInformation;