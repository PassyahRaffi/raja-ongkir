import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface City {
  city_id: string;
  city_name: string;
  type: string;
  postal_code: string;
}
interface CityOriginProps {
  onCityDesti: (id: string) => void;
}

const CityDestination: React.FC<CityOriginProps> = ({ onCityDesti }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [destination, setDestination] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get("/api/city", {
        headers: {
          key: process.env.NEXT_PUBLIC_RAJAONGKIR_KEY,
        },
      });
      setCities(response.data.rajaongkir.results);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    if (destination.length > 0) {
      const results = cities.filter((city) =>
        city.city_name.toLowerCase().includes(destination.toLowerCase())
      );
      setFilteredCities(results);
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
    setActiveIndex(-1); // Reset active index on filter change or input clear
  }, [destination, cities]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" && activeIndex < filteredCities.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      if (activeIndex >= 0) {
        selectCity(
          filteredCities[activeIndex].city_name,
          filteredCities[activeIndex].city_id
        );
      }
    }
  };

  const selectCity = (cityName: string, cityId: string) => {
    setDestination(cityName);
    onCityDesti(cityId);
    setIsDropdownVisible(false);
    setActiveIndex(-1);
    inputRef.current?.blur();
  };

  return (
    <div className="relative overflow-y-hidden grid gap-1">
      <label htmlFor="destination">City destination:</label>
      <input
        id="destination"
        ref={inputRef}
        type="text"
        placeholder="To City"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        autoComplete="off"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        onKeyDown={handleKeyDown}
        required
      />
      {isDropdownVisible && (
        <div
          style={{
            position: "sticky",
            top: "100%",
            left: 0,
            width: "100%",
            border: "1px solid #ccc",
            background: "white",
            zIndex: 1000,
            overflowY: "auto",
            maxHeight: "200px",
          }}
        >
          {filteredCities.map((city, index) => (
            <div
              key={city.city_id}
              onClick={() => selectCity(city.city_name, city.city_id)}
              style={{
                background: index === activeIndex ? "#bde4ff" : "",
                cursor: "pointer",
              }}
            >
              {city.city_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityDestination;
