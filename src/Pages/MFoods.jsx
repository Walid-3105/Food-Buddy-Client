import axios from "axios";
import React, { useState } from "react";

const MFoods = ({ food }) => {
  const [foods, setFoods] = useState(food);
  const { foodImage, foodName, pickupLocation, requestDate, donatorName } =
    foods;
  // const [myAddedFood, setMyAddedFood] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`https://assignment-11-server-beta-bay.vercel.app/food/${id}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          axios
            .get(
              `https://assignment-11-server-beta-bay.vercel.app/food?donatorEmail=${user.email}`
            )
            .then((data) => setFoods(data.data));
        }
        toast.success("Successfully Deleted");
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={foodImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{foodName}</div>
                    <div className="text-sm opacity-50">{pickupLocation}</div>
                  </div>
                </div>
              </td>
              <td>{donatorName}</td>
              <td>{requestDate}</td>
              <td
                onClick={() => {
                  document.getElementById("my_modal_1").showModal();
                }}
                className="btn"
              >
                Edit
              </td>
              <td onClick={() => handleDelete(food._id)} className="btn">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box w-11/12 max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Request Food</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">Food Name</label>
                <input
                  type="text"
                  // value={foodName || ""}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              <div>
                <label className="block font-semibold">Food Image</label>
                <img
                  // src={foodImage}
                  // alt={foodName}
                  className="w-full h-24 object-cover rounded-md"
                />
              </div>

              <div>
                <label className="block font-semibold">Food ID</label>
                <input
                  type="text"
                  // value={_id || ""}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              <div>
                <label className="block font-semibold">Donator Email</label>
                <input
                  type="email"
                  // value={donatorEmail || ""}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-semibold">Donator Name</label>
                <input
                  type="email"
                  // value={donatorName || ""}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-semibold">Pickup Location</label>
                <input
                  type="text"
                  // value={pickupLocation || ""}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              <div>
                <label className="block font-semibold">User Email</label>
                <input
                  type="email"
                  // value={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-semibold">Request Date</label>
                <input
                  type="text"
                  name="requestDate"
                  // value={moment().format("YYYY-MM-DD")}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-semibold">Expire Date</label>
                <input
                  type="text"
                  name="requestDate"
                  // value={expiredDate || ""}
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                />
              </div>

              {/* Editable Field */}
              <div className="col-span-1 sm:col-span-2">
                <label className="block font-semibold">Additional Notes</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Add your notes here..."
                  // value={additionalNotes || ""}
                  // onChange={(e) =>
                  //   setAdditionalNotes(e.target.value)
                  // }
                ></textarea>
              </div>
            </div>

            {/* Actions */}
            <div className="modal-action mt-4">
              <button
                className="btn btn-primary"
                // onClick={() => {
                //   handleRequest();
                //   handleRequestFood();
                //   document.getElementById("my_modal_1").close();
                // }}
              >
                Request
              </button>
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MFoods;
