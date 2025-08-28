import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionContainer from "../SectionContainer";
import { toast } from "react-toastify";
import "../../styles/sendEmail.scss";

export default function ContactForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const msgParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        msgParams,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      );

      if (result.status === 200) {
        toast.success("Message sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send", result.data.error);
      }
    } catch (error) {
      toast.error("Failed to send", error.message);
    } finally {
      setLoading(false);
    }
  };

  const form = (
    <div className="emailFormContainer">
      <h2 className="emailFormTitle">Send me an email 📧</h2>
      <form onSubmit={sendEmail} className="emailForm">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="emailInput"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="emailInput"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="emailTextarea"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
        <button type="submit" className="emailButton" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
  return <SectionContainer {...props} content={form} />;
}
