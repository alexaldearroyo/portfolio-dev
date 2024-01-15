import React from "react";

const Terminal = () => {
  return (
    <div className="terminal">
      <p>
        Communicate with me.<span className="cursor">|</span>
      </p>
    </div>
  );
};

const ContactForm = () => {
  return (
    
    <div className="centered-box" id="contact">
      <form action="https://formspree.io/f/xzblrvbz" method="POST">
        <div className="mt-5 mb-2">
          <label htmlFor="userEmail" className="form-label">
            Your email:
          </label>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control w-full p-3 text-sm"
            id="userEmail"
            name="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="userMessage" className="form-label">
            Your message:
          </label>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control w-full p-4 text-sm"
            id="userMessage"
            name="message"
            rows="4"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button type="submit">
          <span className="arrow">&gt;</span> SEND
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex-wrapper">
      <Terminal />
      <ContactForm />
    </div>
  );
};

export default Contact;
