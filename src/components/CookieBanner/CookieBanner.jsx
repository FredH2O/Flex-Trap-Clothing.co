import React from "react";
import { useCookies } from "react-cookie";
import "./CookieBanner.css";

function CookieBanner() {
  const [cookies, setCookie] = useCookies(["userConsent"]);
  const hasConsent = cookies.userConsent;

  function acceptCookies() {
    setCookie("userConsent", true, { path: "/", maxAge: 3600 * 24 * 30 });
  }

  return !hasConsent ? (
    <div className="cookie-banner">
      <p>We use cookies to improve your experience. Do you accept?</p>
      <button onClick={acceptCookies}>Accept</button>
      <button>Reject</button>
    </div>
  ) : null;
}

export default CookieBanner;
