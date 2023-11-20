import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import React from "react";

const ChatInput = () => {
  return (
    <div
      className="rounded-lg text-sm w-full"
      style={{ position: "fixed", bottom: 0 }}
    >
      <form className="bg-black/50 text-gray-400 p-5 space-x-5">
        <input
          className="bg-transparent focus:outline-none flex-1 w-[90%]"
          type="text"
          placeholder="Type Your message here..."
        />
        <button className="" type="submit">
          <PaperAirplaneIcon className="mx-4 -rotate-45 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
