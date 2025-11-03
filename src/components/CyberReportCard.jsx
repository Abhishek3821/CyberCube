import React from "react";
import { FileText } from "lucide-react";

function CyberReportCard() {
  return (
    <div className="max-w-6xl w-full mx-auto bg-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left Side: Image */}
        <div className="p-8 sm:p-12 flex items-center justify-center bg-indigo-500">
          <div className="transform transition-transform duration-500 ease-in-out hover:scale-105 hover:-rotate-2">
            <img
              src="https://picsum.photos/seed/cybersecurity/400/550"
              alt="CyberCube AI Report Cover"
              className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
              style={{ aspectRatio: "400 / 550" }}
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="p-8 sm:p-12 flex flex-col justify-center text-white">
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-indigo-200 mb-4">
            <FileText className="w-5 h-5" />
            <span>Report</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Utilizing Artificial Intelligence within CyberCube's Products
          </h1>

          <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
            Learn more about how we leverage AI to deliver world-leading cyber
            risk analytics.
          </p>

          <a
            href="#"
            className="self-start bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider py-3 px-8 rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-indigo-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default CyberReportCard;
