import React from "react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isAi: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isAi }) => {
  return (
    <div
      className={cn(
        "mb-4 flex",
        isAi ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isAi
            ? "bg-secondary text-primary mr-12"
            : "bg-primary text-white ml-12"
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;