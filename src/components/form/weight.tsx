import { useState } from "react";

interface WeightProps {
  onWeightChange: (weight: string) => void;
}

const Weight: React.FC<WeightProps> = ({ onWeightChange }) => {
  const [weight, setWeight] = useState("");

  const handleWeightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    onWeightChange(newWeight);
  };

  return (
    <div className="grid gap-1">
      <label htmlFor="weight">Shipping weight (gram) :</label>
      <div className="relative flex">
        <input
          id="weight"
          type="text"
          placeholder="Package weight"
          className="shadow appearance-none border rounded w-full py-2 pl-3 pr-12 text-gray-700 leading-tight focus:outline-none"
          autoComplete="off"
          value={weight}
          onChange={handleWeightInput}
          required
        />

        <span className="absolute min-w-10 text-center right-0 bottom-[1px] rounded-r bg-neutral-200 text-sm py-2 z-10">
          g
        </span>
      </div>
    </div>
  );
};

export default Weight;
