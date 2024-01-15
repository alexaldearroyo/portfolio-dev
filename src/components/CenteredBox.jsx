import React from "react";

function CenteredBox() {
  return (
    <div className="centered-box">
      <p>
        — I am a{" "}
        <a className="no-link-dec" href="projects">
          <span className="highlight">
            software engineer and full-stack web developer
          </span>
        </a>
        .
      </p>

      <p>— I express ideas through code, design, and stories.</p>
      <p>
        — I work and have experience with the following languages and
        technologies:<br></br>
      </p>

      <p className="text-center">
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img src="python.svg" alt="Python Logo" className="h-6 w-auto mr-2" />
        </span>
        {/* Python  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="html.svg"
            alt="HTML Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* HTML 5  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img src="css.svg" alt="CSS Logo" className="ml-3 h-6 w-auto mr-2" />
        </span>
        {/* CSS 3  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="js.svg"
            alt="JavaScript Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* JavaScript  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="ts.svg"
            alt="TypeScript Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* TypeScript  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img src="sql.svg" alt="SQL Logo" className="ml-3 h-6 w-auto mr-2" />
        </span>
        {/* SQL  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="bash.svg"
            alt="Bash Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Bash  */}

        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="react.svg"
            alt="React Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* React.js  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="next.svg"
            alt="Next Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Next.js  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="node.svg"
            alt="Node Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Node.js  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="jquery.svg"
            alt="jQuery Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* jQuery  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="vite.svg"
            alt="Vite Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Vite  */}

        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="tailwind.svg"
            alt="Tailwind Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Tailwind CSS  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="bootstrap.svg"
            alt="Bootstrap Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Bootstrap  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="sass.svg"
            alt="Sass Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Sass  */}

        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img src="git.svg" alt="Git Logo" className="ml-3 h-6 w-auto mr-2" />
        </span>
        {/* Git  */}
        <span className="inline-block" style={{ margin: "5px 0" }}>
          <img
            src="jest.svg"
            alt="Jest Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span>
        {/* Jest  */}
        {/* <span className="inline-block" style={{ margin: '5px 0' }}>
          <img src="figma.svg" alt="Figma Logo" className="ml-3 h-6 w-auto mr-2" />
        </span> */}
        {/* Figma  */}
        {/* <span className="inline-block" style={{ margin: '5px 0' }}>
          <img
            src="photoshop.svg"
            alt="Photoshop Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span> */}
        {/* Photoshop  */}
        {/* <span className="inline-block" style={{ margin: '5px 0' }}>
          <img
            src="illustrator.svg"
            alt="Illustrator Logo"
            className="ml-3 h-6 w-auto mr-2"
          />
        </span> */}
        {/* Illustrator  */}
      </p>

      <p>
        – I am a creative type, so I make some{" "}
        <a className="no-link-dec" href="https://alexarroyo-art.vercel.app/">
          <span className="highlight">
            art
            </span>
        </a>
        {" "}and music too.
      </p>

      <p>— I speak English, Spanish, French, Korean, and Japanese.</p>
    </div>
  );
}

export default CenteredBox;
