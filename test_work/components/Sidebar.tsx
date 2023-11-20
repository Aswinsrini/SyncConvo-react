import React from "react";
import NewChat from "./NewChat";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="flex items-start p-2">
      <div className="p-2 flex flex-col min-h-screen">
        <NewChat />
        {/* Chat row */}
      </div>
      <button>
        <Bars3CenterLeftIcon className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};
export default Sidebar;
