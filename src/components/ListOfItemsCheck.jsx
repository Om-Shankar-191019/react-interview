// Problem statement :
// show list of items along with checkbox. if checked then appear delete button and on deletion, remove item.
import React, { useState } from "react";

const dataList = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

const ListOfItemsCheck = () => {
  const [isChecked, setIsChecked] = useState({});
  const [cities, setCities] = useState([
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
  ]);
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setIsChecked({ ...isChecked, [name]: checked });
  };
  //   console.log(isChecked);
  const handleDelete = (cityIndex) => {
    let updatedCities = cities.filter((item) => item !== cities[cityIndex]);
    setCities(updatedCities);
  };
  return (
    <div>
      {cities.map((city, index) => {
        return (
          <div
            key={`city - ${index}`}
            className="border border-red-400 m-4 p-4"
          >
            <div>
              <label>
                <input
                  type="checkbox"
                  name={city}
                  checked={isChecked[city] || false}
                  onChange={handleCheck}
                ></input>
                {city}
              </label>

              {isChecked[city] && (
                <button
                  type="button"
                  className="border border-blue-600 p-1 mx-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfItemsCheck;
