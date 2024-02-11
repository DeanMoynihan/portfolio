"use client";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";

export default function EmailButton({ email }: { email: string }) {
  const [showMessage, setShowMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <>
      <a title="Email" onClick={() => setShowMessage(true)} className="contact-icon">
        <FeatherIcon icon={"mail"} size={32} strokeWidth={0.5} />
      </a>
      {showMessage && (
        <div
          className="email-alert"
          onClick={() => {
            navigator.clipboard.writeText(email).then(() => {
                setCopied(true);
                setTimeout(() => {
                  setShowMessage(false);
                  setCopied(false);
                }, 2000);
              })
              .catch((err) => {
                console.error("Unable to copy text to clipboard", err);
              });
          }}
        >
          {copied ? (
            "COPIED."
          ) : (
            <div className="email-alert-text">
              {email.toUpperCase()}<FeatherIcon icon={"copy"} size={24} strokeWidth={1} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
