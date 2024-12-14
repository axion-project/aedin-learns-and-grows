import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="w-2 h-2 bg-accent rounded-full animate-blink"></div>
      <div className="w-2 h-2 bg-accent rounded-full animate-blink" style={{ animationDelay: "0.2s" }}></div>
      <div className="w-2 h-2 bg-accent rounded-full animate-blink" style={{ animationDelay: "0.4s" }}></div>
    </div>
  );
};

export default TypingIndicator;