import React, { useEffect, useState } from "react";
import BFoods from "../../Pages/BFoods";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const sortFoods = [...foods]
    .sort((a, b) => b.foodQuantity - a.foodQuantity)
    .slice(0, 6);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortFoods &&
          sortFoods.map((food) => <BFoods food={food} key={food._id}></BFoods>)}
      </div>
    </div>
  );
};

export default FeaturedFoods;
