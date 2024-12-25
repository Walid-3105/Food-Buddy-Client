import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Shared/NavBar";
import AFoods from "./Afoods";
import Footer from "../Shared/Footer";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState();
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-beta-bay.vercel.app/food?foodStatus=available&search=${search}&sort=${sortOrder}`
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
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mx-auto min-h-screen">
        <div className="flex text-center items-center justify-between">
          <div className="text-2xl font-semibold">
            <h3>Connecting You to Shared Meals</h3>
          </div>
          <div className="my-4 ">
            {/* Search input */}
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search by food name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <div>
            <button
              className="btn bg-[#023E8A] text-white"
              onClick={handleGridColumn}
            >
              Change Layout
            </button>
          </div>
          <div>
            {sortOrder === "asc" ? (
              <button
                className="btn bg-[#023E8A] text-white"
                onClick={() => handleSortChange("desc")}
              >
                Descending Order
              </button>
            ) : (
              <button
                className="btn bg-[#023E8A] text-white"
                onClick={() => handleSortChange("asc")}
              >
                Ascending Order
              </button>
            )}
          </div>
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
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AvailableFoods;
