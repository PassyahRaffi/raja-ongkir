// pages/shipping.tsx
import axios from "axios";
import { useState } from "react";

export default function Shipping() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState(0);
  const [cost, setCost] = useState(0);

  const calculateShipping = async () => {
    const data = {
      origin: origin,
      destination: destination,
      weight: weight,
      courier: "jne",
    };

    const headers = {
      key: process.env.NEXT_PUBLIC_RAJAONGKIR_KEY,
      "content-type": "application/json",
    };

    const response = await axios.post("/api/cost", data, { headers: headers });
    setCost(response.data.rajaongkir.results[0].costs[0].cost[0].value);
  };

  return (
    <div>
      <h1>Shipping Calculator</h1>
      <input
        type="text"
        placeholder="Origin City ID"
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination City ID"
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight in grams"
        onChange={(e) => setWeight(parseInt(e.target.value, 10))}
      />
      <button onClick={calculateShipping}>Calculate</button>
      <p>Shipping Cost: Rp {cost}</p>
    </div>
  );
}
