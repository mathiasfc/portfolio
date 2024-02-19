import React, { useState } from "react";
import * as s from "./style";

const ContactMeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    console.log("handleButtonClick)");
  };

  return (
    <s.ContactMeFormContainer>
      <s.LabelContainer>
        <label htmlFor="email">Enter your email*</label>
      </s.LabelContainer>

      <s.InlineInputWithButtonContainer>
        <s.InputContainer>
          <span>{">"}</span>{" "}
          <input
            id="email"
            autoFocus
            autoComplete="off"
            data-target="text-suggester.input"
            aria-describedby="email-err"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            spellCheck="false"
            aria-invalid="true"
          />
        </s.InputContainer>
        <button type="button" onClick={handleButtonClick} disabled>
          Continue
        </button>
      </s.InlineInputWithButtonContainer>

      <s.LabelContainer>
        <label htmlFor="message">Enter your message*</label>
      </s.LabelContainer>
      <s.InlineInputWithButtonContainer>
        <s.InputContainer>
          <span>{">"}</span>{" "}
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </s.InputContainer>
        <button type="button">Send</button>
      </s.InlineInputWithButtonContainer>

      <div>
        <span>successfully sent message</span>
      </div>
    </s.ContactMeFormContainer>
  );
};

export default ContactMeForm;
