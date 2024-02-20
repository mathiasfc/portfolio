import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import routes from "@/utils/routes";
import * as s from "./style";

const ContactMeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessageTextarea, setShowMessageTextarea] = useState(false);
  const [successfullySentMessage, setSuccessfullySentMessage] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: false,
    message: false,
  });

  const validateEmail = (email: string): boolean => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return true;
    }

    return false;
  };

  const validateMessage = (message: string): boolean => {
    if (!message) {
      return true;
    }

    return false;
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
      setSuccessfullySentMessage(true);
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
    <>
      {successfullySentMessage ? (
        <s.SuccessfullySentMessageContainer>
          <Image
            src="/successfully-sent.png"
            width={250}
            height={250}
            alt="Picture of a puppy dog that represents an successfully message sent"
          />
          <s.MessageContainer>
            <span>Thank you for reaching out, we'll be in touch soon!</span>
            <Link href={routes.home}>[back to home page]</Link>
          </s.MessageContainer>
        </s.SuccessfullySentMessageContainer>
      ) : (
        <form onSubmit={handleSubmit}>
          <s.LabelContainer>
            <label htmlFor="email">
              <GlitchText text="Enter your email*" />
            </label>
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
                <label htmlFor="message">
                  <GlitchText text="Enter your message*" />
                </label>
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
      )}
    </>
  );
};

export default ContactMeForm;
