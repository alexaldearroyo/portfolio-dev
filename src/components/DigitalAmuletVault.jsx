import React from "react";
import Image from "next/image";

const DigitalAmuletVault = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Digital Amulet Vault</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          A full-stack e-commerce prototype for exploring and purchasing digital amulets.
          <a href="https://digitalamuletvault.fly.dev/" target="_blank">
            <Image
              src="/dav.png"
              alt="Digital Amulet Vault Screenshot"
              width={600}
              height={400}
              className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              className="h-5 w-auto mr-2"
            />
            Next.js
            <Image
              src="/ts_b.svg"
              alt="TypeScript Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            TypeScript
            <Image
              src="/tailwind_b.svg"
              alt="Tailwind Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            Tailwind
            <Image
              src="/postgres.svg"
              alt="PostgreSQL Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            PostgreSQL
            <Image
              src="/webgl.svg"
              alt="WebGL Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            WebGL
          </p>
        </div>
        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
                Digital Amulet Vault is a full-stack e-commerce prototype where users can explore and purchase digital amulets.
                The application includes essential features like product browsing, shopping cart, checkout process, and a thank-you page after purchase.
                The UI is styled with Tailwind CSS and Emotion, and dynamic visuals are rendered using WebGL.
              </p>
              <p className="pt-4 pb-4">
                The project utilizes PostgreSQL as a database to store product information and leverages the Context API & cookies
                to manage the shopping cart state. The app is deployed on Fly.io, with CI/CD pipelines managed via GitHub Actions.
              </p>

              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/digitalamuletvault"
                  target="_blank"
                >
                  <span className="arrow">&gt;</span> More info on GitHub
                </a>
              </p>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={() => toggleExpandibleSection("DigitalAmuletVault")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalAmuletVault;
