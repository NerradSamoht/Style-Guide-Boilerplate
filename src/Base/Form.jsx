import React from "react";

const Form = () => (
  <section id="form">
    <h2>Forms</h2>
    <form>
       
      <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
      </div>
       
      <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" />
      </div>
       
      <div>
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" name="message" />
      </div>
       
      <div className="button">
            <button type="submit">Send your message</button>
      </div>
    </form>
  </section>
);

export default Form;
