import { useState } from "react";

export function Tabs() {
  const [active, setActive] = useState(0);

  const tabs = [
    { label: "Баланс", content: "Здесь будет баланс" },
    { label: "Организация", content: "Здесь будет организация" },
    { label: "Выплаты", content: "Здесь будут выплаты" },
  ];

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
export function TabsList({ children }) {
  return <div className="flex space-x-2 border-b">{children}</div>;
}

export function TabsTrigger({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 ${
        isActive ? "border-b-2 border-blue-600 font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}
