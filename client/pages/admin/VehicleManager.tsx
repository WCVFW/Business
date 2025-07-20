import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/vehicles";

export default function VehicleManager() {
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("auto");
  const [loading, setLoading] = useState(false);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setVehicles(response.data);
    } catch (error) {
      alert("Failed to fetch vehicles");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const addVehicle = async () => {
    if (!name.trim()) {
      alert("Enter vehicle name");
      return;
    }
    try {
      await axios.post(API_URL, { name, type });
      setName("");
      fetchVehicles();
    } catch {
      alert("Failed to add vehicle");
    }
  };

  const removeVehicle = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchVehicles();
    } catch {
      alert("Failed to remove vehicle");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Vehicle Management</h2>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Vehicle name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 flex-grow"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2"
        >
          <option value="auto">Auto</option>
          <option value="bike">Bike</option>
          <option value="car">Car</option>
          <option value="scooter">Scooter</option>
        </select>
        <button
          onClick={addVehicle}
          className="bg-blue-600 text-white px-4 py-2"
        >
          Add
        </button>
      </div>

      {loading ? (
        <p>Loading vehicles...</p>
      ) : vehicles.length === 0 ? (
        <p>No vehicles added yet.</p>
      ) : (
        <ul>
          {vehicles.map((v: any) => (
            <li
              key={v.id}
              className="flex justify-between border-b py-2 items-center"
            >
              <span>{v.name} ({v.type})</span>
              <button
                onClick={() => removeVehicle(v.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
