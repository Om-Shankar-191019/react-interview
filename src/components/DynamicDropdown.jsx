// Problem statement :
// make two dropdown , country and cities. if a country selected, other dropdown should automatically show all it's respective cities.

import React, { useState } from "react";

const countries = [
  {
    name: "India",
    cities: [
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
    ],
    value: "IN",
  },
  {
    name: "USA",
    cities: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ],
    value: "US",
  },
  {
    name: "Canada",
    cities: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Calgary",
      "Ottawa",
      "Edmonton",
      "Winnipeg",
      "Quebec City",
      "Hamilton",
      "Victoria",
    ],
    value: "CA",
  },
  {
    name: "Australia",
    cities: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Canberra",
      "Hobart",
      "Darwin",
      "Gold Coast",
      "Newcastle",
    ],
    value: "AU",
  },
];
const DynamicDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleOptionChange = (e) => {
    let country = countries.find((c) => c.name === e.target.value);
    setSelectedCountry(country);
  };

  return (
    <div>
      {/* <label htmlFor="countries">Select Countries</label> */}
      <select name="countries" id="countries" onChange={handleOptionChange}>
        <option value="">Choose a country</option>
        {countries.map((country, index) => {
          return (
            <option key={`country - ${index}`} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>

      <select
        name="cities"
        id="cities"
        onChange={(e) => console.log(e.target.value)}
      >
        <option name="">select cities</option>
        {selectedCountry &&
          selectedCountry.cities.map((city, index) => {
            return (
              <option key={`city ${city} -- ${index}`} value={city}>
                {city}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default DynamicDropdown;
