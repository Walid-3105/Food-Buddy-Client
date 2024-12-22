import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import AFoods from "./Afoods";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState();
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/food?foodStatus=available&search=${search}&sort=${sortOrder}`
      )
      .then((data) => setFoods(data.data))
      .catch((err) => console.error("Error fetching foods:", err));
  }, [search, sortOrder]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleGridColumn = () => {
    setLayout(!layout);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="my-4">
        {/* Search input */}
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by food name"
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <button className="btn" onClick={handleGridColumn}>
          Change Layout
        </button>
      </div>
      <div>
        <button className="btn" onClick={() => handleSortChange("asc")}>
          Ascending Order
        </button>
        <button className="btn" onClick={() => handleSortChange("desc")}>
          Descending Order
        </button>
      </div>
      <div
        className={`grid ${
          layout ? "grid-cols-2" : "lg:grid-cols-3"
        } grid-cols-1 md:grid-cols-2  gap-5`}
      >
        {foods?.map((food) => (
          <AFoods key={food._id} food={food}></AFoods>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
