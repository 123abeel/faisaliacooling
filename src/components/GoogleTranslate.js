import React, { useEffect, useRef } from "react";

const TranslateComponent = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            includedLanguages: "ar",
          },
          googleTranslateRef.current
        );
      } else {
        console.error("Google Translate API not fully loaded.");
      }
    };

    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        initializeGoogleTranslate();
      } else {
        setTimeout(checkGoogleTranslate, 100); // Retry after 100ms if not yet available
      }
    };

    checkGoogleTranslate(); // Initial check

  }, []);

  return (
    <div className="google_element">
      <span ref={googleTranslateRef} />
    </div>
  );
};

export default TranslateComponent;