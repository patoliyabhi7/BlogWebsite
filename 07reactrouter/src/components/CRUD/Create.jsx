import React, { useState, useEffect } from "react";
import { createUser } from "./../../../apiService";

export default function Create() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [showSuccess, setShowSuccess] = useState(false); 

  const createNewUser = async () => {
    try {
      await createUser(newUser);
      setNewUser({ name: "", email: "", username: "", password: "" });
      setShowSuccess(true); // Show success message
      setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  return (
    <div className="relative flex items-top justify-center min-h-[400px] ">
      <form className="flex flex-col justify-center">
        <div className="flex flex-col">
          <label htmlFor="name" className="hidden">
            Full Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="tel" className="hidden">
            Username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="tel" className="hidden">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>

        <button
          onClick={createNewUser}
          className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
        >
          Submit
        </button>
      </form>

      {showSuccess && (
        <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
          User creation successful!
        </div>
      )}
    </div>
  );
}
