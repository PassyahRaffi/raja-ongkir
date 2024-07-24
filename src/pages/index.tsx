import CityDestination from "@src/components/form/cityDestination";
import CityOrigin from "@src/components/form/cityOrigin";
import Expedition from "@src/components/form/expedition";
import Weight from "@src/components/form/weight";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";

const HomePage: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [courier, setCourier] = useState("");
  const [cost, setCost] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [showCost, setShowCost] = useState(false);

  const calculateShipping = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!origin || !destination || !weight || !courier) {
      setErr(true);
      setShowCost(false);
      return;
    }

    setLoading(true);
    setErr(false);
    setShowCost(false);

    const data = {
      origin,
      destination,
      weight,
      courier: courier.toLowerCase(),
    };

    const headers = {
      key: process.env.NEXT_PUBLIC_RAJAONGKIR_KEY,
      "content-type": "application/json",
    };

    try {
      const response = await axios.post("/api/cost", data, { headers });
      setCost(response.data.rajaongkir.results[0].costs[0].cost[0].value);
      setShowCost(true);
    } catch (error) {
      console.error("Error during API call:", error);
      setErr(true);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="relative h-60 lg:h-64 w-full">
        <Image
          src="/assets/hero.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      <div className="max-w-80 mx-auto mt-12">
        <div className="flex flex-col text-center mb-10">
          <h1 className="text-[#9B59BB] font-semibold text-4xl leading-normal">
            Cek Ongkir
          </h1>
          <h2>Cek tarif kirimanmu</h2>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <form
            onSubmit={calculateShipping}
            className="flex flex-col justify-center gap-2"
          >
            <CityOrigin onCityOrigin={setOrigin} />
            <CityDestination onCityDesti={setDestination} />
            <Weight onWeightChange={setWeight} />
            <Expedition courier={setCourier} />

            <button
              type="submit"
              className="bg-[#9B59BB] text-white py-3 rounded"
            >
              Lihat Harga
            </button>
          </form>

          {loading && (
            <div className="text-xs italic rounded bg-neutral-200 text-center py-5">
              Calculating shipping costs...
            </div>
          )}

          {err && (
            <div className="text-xs italic rounded bg-neutral-200 text-center py-5 text-red-500">
              Please insert all data!
            </div>
          )}

          {showCost && (
            <div className="rounded bg-neutral-200 text-center py-5">
              <p>Shipping Rates: IDR {cost}</p>
              <p className="text-[10px] italic mt-1">
                *Special Discount Price: Order from Official Website
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
