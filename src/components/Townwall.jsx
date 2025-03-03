import React from "react";
import Image from 'next/image';

const Townwall = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Townwall</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
        A location-based social platform where users can share messages, posts, and events.
          <a href="https://townwall.fly.dev/" target="_blank">
            <Image
              src="/t.png"
              alt="Townwall Screenshot"
              width={600}
              height={400}
              className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className="mt-5 flex justify-center">
            <Image
              src="/react_b.svg"
              alt="React Logo"
              width={20}
              height={20}
              className="h-5 w-auto mr-2"
            />
            React
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            Next.js
            <Image
              src="/sql.svg"
              alt="PostgreSQL Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            PostgreSQL
            <Image
              src="/tailwind_b.svg"
              alt="Tailwind CSS Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            Tailwind
          </p>
        </div>

        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
              &quot;Townwall&quot; is a web platform where users can share posts based on their geolocation.
                It uses the Geolocation API and Leaflet for real-time location-based content.
                Users can register and authenticate securely, manage their profiles, and upload images via Cloudinary.

              </p>
              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/Townwall"
                  target="_blank"
                >
                  <span className="arrow no-hover">&gt;</span> More info on GitHub
                </a>
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={() => toggleExpandibleSection("Townwall")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Townwall;
