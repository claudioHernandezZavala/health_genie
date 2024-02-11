import React, { useState } from "react";
import {default as BetterList} from "./BetterList"
function Body() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hypertension: false,
    heartDisease: false,
    smokingHistory: "",
    bmi: "",
    hba1cLevel: "",
    bloodGlucoseLevel: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-left items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-center text-xl font-bold mb-6">
          Enter Health Information
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        mv  <div className="mb-4">
            <label htmlFor="gender" className="block mb-1">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block mb-1">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hypertension" className="block mb-1">
              Hypertension:
            </label>
            <input
              type="checkbox"
              id="hypertension"
              name="hypertension"
              checked={formData.hypertension}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Yes</span>
          </div>
          <div className="mb-4">
            <label htmlFor="heartDisease" className="block mb-1">
              Heart Disease:
            </label>
            <input
              type="checkbox"
              id="heartDisease"
              name="heartDisease"
              checked={formData.heartDisease}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Yes</span>
          </div>
          <div className="mb-4">
            <label htmlFor="smokingHistory" className="block mb-1">
              Smoking History:
            </label>
            <select
              id="smokingHistory"
              name="smokingHistory"
              value={formData.smokingHistory}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="never">Never</option>
              <option value="former">Former</option>
              <option value="current">Current</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="bmi" className="block mb-1">
              BMI:
            </label>
            <input
              type="text"
              id="bmi"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hba1cLevel" className="block mb-1">
              HbA1c Level:
            </label>
            <input
              type="text"
              id="hba1cLevel"
              name="hba1cLevel"
              value={formData.hba1cLevel}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bloodGlucoseLevel" className="block mb-1">
              Blood Glucose Level:
            </label>
            <input
              type="text"
              id="bloodGlucoseLevel"
              name="bloodGlucoseLevel"
              value={formData.bloodGlucoseLevel}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 col-span-2"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Diabetes facts and information */}
      <div className="m-10">
      <BetterList/>
      </div>
    </div>
  );
}




export default Body;
