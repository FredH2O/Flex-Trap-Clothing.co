import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./CookieBanner.css";

function CookieBanner() {
  const [cookies, setCookie] = useCookies(["userConsent"]);
  const hasConsent = cookies.userConsent;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (hasConsent !== undefined) {
      setIsVisible(false);
    }
  }, [hasConsent]);

  function acceptCookies() {
    setCookie("userConsent", true, { path: "/", maxAge: 3600 * 24 * 30 });
    setIsVisible(false);
  }

  function rejectCookies() {
    setCookie("userConsent", false, { path: "/", maxAge: 3600 * 24 * 30 });
    setIsVisible(false);
  }

  return isVisible && !hasConsent ? (
    <div className="cookie-banner">
      <p>We use cookies to improve your experience. Do you accept?</p>
      <button className="m-1" onClick={acceptCookies}>
        Accept
      </button>
      <button className="m-1" onClick={rejectCookies}>
        Reject
      </button>
    </div>
  ) : null;
}

export default CookieBanner;
