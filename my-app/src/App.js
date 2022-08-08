import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import './node_modules/tailwindcss';

function App() {
  init("user_xxxxxxxxxxxxxxxxxxx");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("SERVICE_D", "TEMPLAE_ID", form.current, "USER_ID").then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result.text);
      },
      (error) => {
        alert("Message Sent error");
        console.log(error.text);
      }
    );
  };
  return (
    <div className="container text-center bg-warning">
      <form className="form font-bold underline" onSubmit={handleSubmit} ref={form}>
        <h1 className="text-center">Registration Form</h1>
        <div className="form-row ">
          <div className="form-group col-md-12">
            <label htmlFor="First Name">First Name</label>
            <input type="text" className="form-control" name="firstname" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="Last Name">Last Name</label>
            <input type="text" className="form-control" name="lastname" />
          </div>
          <div className="form-group col-12">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="user_address"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="message">message</label>
            <textarea
              type="text"
              className="form-control"
              id="inputmessage4"
              name="user_message"
            />
          </div>
        </div>

        <button type="submit" className="btn p-2 btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default App;