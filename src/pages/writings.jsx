import React from "react";

const BlogPost = ({title, link }) => {
  return (

      <div className="inner-text">
        <h3>{title}</h3>
        <p className="pt-3 pb-3">
          <a href={link} target="_blank">
            <span className="arrow">&gt;</span> Read on Medium
          </a>
        </p>
      </div>
  );
};


const MonthHeader = ({ month }) => {
  return (
      <div className="box-header">
        {month}
      </div>
  );
};

const BlogList = () => {
  return (
    <div className="flex-wrapper">

    <div className="centered-box-win">
      <MonthHeader month="November 2023" />
      <BlogPost
        month="November 2023"
        title="Developing a Web App Using the Principles of Atomic Design"
        link="https://medium.com/@alexaldearroyo/the-importance-of-pseudocode-developing-a-web-app-using-the-principles-of-atomic-design-d9bce71c953d"
      />
      </div>
    
    <div className="centered-box-win">
      <MonthHeader month="September 2023" />
      <BlogPost
        month="September 2023"
        title="Building an Installable Desktop App with Python, PyQt, and Py2app"
        link="https://medium.com/@alexaldearroyo/building-an-installable-desktop-app-with-python-pyqt-and-py2app-ae369f5b3258"
      />
      </div>

      <div className="centered-box-win">
      <MonthHeader month="August 2023" />
      <BlogPost
        month="August 2023"
        title="Mastering VS Code: The Power of Keyboard Shortcuts"
        link="https://medium.com/@alexaldearroyo/mastering-vs-code-the-power-of-keyboard-shortcuts-8736ab081442"
      />

      <hr className="mx-auto" style={{ width: "95%", marginTop: 0, marginBottom: 0 }} />

      <BlogPost
        month="August 2023"
        title="Learn How to Use Git & GitHub: A Guide for Absolute Beginners"
        link="https://medium.com/@alexaldearroyo/learn-how-to-ue-git-github-a-guide-for-absolute-beginners-a051f5ed7d63"
      />
    </div>
    </div>
  );
};

export default BlogList;
