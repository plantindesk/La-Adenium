import React from 'react';
import 'tailwindcss/tailwind.css';

export default function AboutUs() {
    return (
        <div className="relative">
        {/* Image */}
        <img
          src="https://picsum.photos/300/200"
          alt="Banner Image"
          className="w-full h-auto"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Text Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Your Banner Text</h2>
          <p className="text-lg">Subtitle or additional information</p>
        </div>
      </div>
    );
    
}

