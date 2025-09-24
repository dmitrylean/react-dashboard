import { useState } from "react";

export function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`pb-2 ${
              active === index
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
