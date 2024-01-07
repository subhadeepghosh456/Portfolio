import React, { useRef } from "react";
import "./Form.Style.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ied8zd",
        "template_hsf1qn5",
        form.current,
        "_etNgHF5ZWufOqipB"
      )
      .then(
        (result) => {
          toast.success("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message");
        }
      );
  };
  return (
    <div className="form">
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label> Email</label>
        <input type="email" name="user_email" />

        <label>Message</label>
        <textarea
          placeholder="Type Your message here"
          rows="6"
          name="message"
        />
        <input className="btn" type="submit" value="Send" />
        {/* <button className="btn">Submit</button> */}
      </form>
    </div>
  );
};

export default Form;
