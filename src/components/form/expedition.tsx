import { useState } from "react";

interface CourierProps {
  courier: (event: string) => void;
}

const Expedition: React.FC<CourierProps> = ({ courier }) => {
  const [selectedExpedition, setSelectedExpedition] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newExpedition = e.target.value;
    setSelectedExpedition(newExpedition);
    courier(newExpedition);
  };

  return (
    <div className="grid gap-1">
      <label htmlFor="courier">Select expedition</label>
      <select
        id="courier"
        className="cursor-pointer shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        value={selectedExpedition}
        onChange={handleSelect}
        required
      >
        <option className="bg-[#9B59BB] text-white" value="">
          Select here
        </option>
        <option value="JNE">JNE</option>
        <option value="POS">POS Indonesia</option>
        <option value="TIKI">TIKI</option>
      </select>
    </div>
  );
};

export default Expedition;
