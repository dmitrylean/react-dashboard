export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-14 py-3 bg-[#006999] text-white rounded text-[15px] hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}
