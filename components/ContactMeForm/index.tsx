import React, { useState } from "react";
import * as s from "./style";

const ContactMeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessageTextarea, setShowMessageTextarea] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    message: "",
  });

  const validateEmail = (email: string): string => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Invalid email format";
    }

    return "";
  };

  const validateMessage = (message: string): string => {
    if (!message) {
      return "Message is required";
    }

    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(value),
    }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMessage(value);

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      message: validateMessage(value),
    }));
  };

  const isFormValid = () => {
    return email && !formErrors.email && message && !formErrors.message;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted successfully:", { email, message });
    } else {
      console.error("Form submission failed:", formErrors);
    }
  };

  const getFeedbackSymbol = (field: "email" | "message") => {
    if (field === "email") {
      if (formErrors.email) {
        return <span className="span-red-feedback-symbol">X</span>;
      } else if (email && !formErrors.email) {
        return <span className="span-green-feedback-symbol">✓</span>;
      } else {
        return <span className="span-grey-feedback-symbol">{">"}</span>;
      }
    }

    if (formErrors.message) {
      return <span className="span-red-feedback-symbol">X</span>;
    } else if (message && !formErrors.message) {
      return <span className="span-green-feedback-symbol">✓</span>;
    } else {
      return <span className="span-grey-feedback-symbol">{">"}</span>;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <s.LabelContainer>
        <label htmlFor="email">Enter your email*</label>
      </s.LabelContainer>

      <s.InlineInputWithButtonContainer>
        <s.InputContainer>
          {getFeedbackSymbol("email")}{" "}
          <input
            id="email"
            autoFocus
            autoComplete="off"
            maxLength={300}
            data-target="text-suggester.input"
            aria-describedby="email-err"
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            spellCheck="false"
            aria-invalid="true"
          />
        </s.InputContainer>
        {!showMessageTextarea && (
          <button
            type="button"
            onClick={() => setShowMessageTextarea(true)}
            disabled={!email || !!formErrors.email}
          >
            Continue
          </button>
        )}
      </s.InlineInputWithButtonContainer>

      {showMessageTextarea && (
        <>
          <s.LabelContainer>
            <label htmlFor="message">Enter your message*</label>
          </s.LabelContainer>
          <s.InlineInputWithButtonContainer>
            <s.InputContainer>
              {getFeedbackSymbol("message")}{" "}
              <textarea
                id="message"
                autoFocus
                name="message"
                maxLength={1000}
                value={message}
                onChange={handleMessageChange}
              />
            </s.InputContainer>
            <button type="submit" disabled={!isFormValid()}>
              Send
            </button>
          </s.InlineInputWithButtonContainer>
        </>
      )}
    </form>
  );
};

export default ContactMeForm;
