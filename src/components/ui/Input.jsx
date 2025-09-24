export function Input({ value, onChange, placeholder, className = "" }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`border rounded px-3 py-2 w-full ${className}`}
    />
  );
}
