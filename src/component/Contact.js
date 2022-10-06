import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Contact us</h1>
      <form className="contact">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

      </form>
    </>
  );
};

export default Contact;
