import React from "react";

interface ITabsProps {
  activeTab: string;
  setActiveTab: (val: string) => void;
}

function Tabs({ activeTab, setActiveTab }: ITabsProps) {
  return (
    <div className="my-4 border rounded-md px-4 py-2 ">
      <button
        className={
          activeTab === "portfolio"
            ? "p-2 rounded-md bg-blue-100 text-blue-600 font-medium mx-2 mr-8 px-4 "
            : "p-2 rounded-md  bg-gray-100 text-gray-600 font-medium px-4 ml-2"
        }
        onClick={() => setActiveTab("portfolio")}
      >
        Portfolio
      </button>
      <button
        className={
          activeTab === "resume"
            ? "p-2 rounded-md bg-blue-100 text-blue-600 font-medium mx-2 ml-8 px-4 "
            : "p-2 rounded-md bg-gray-100 text-gray-600 font-medium px-4"
        }
        onClick={() => setActiveTab("resume")}
      >
        Resume
      </button>
    </div>
  );
}

export default Tabs;
