/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setlocation] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, location);
    try {
      fetch("http://localhost:5000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "appilication/json",
        },
        body: JSON.stringify({ name, email, location, password }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      navigate("/");
      toast.success('Account created successful')
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className={"min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 "}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#BF40BF]">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div className="mt-1">
                <input
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                  name="location"
                  type="text"
                  required
                  className="input input-bordered w-full"
                  placeholder="Your Location"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="input input-bordered w-full"
                  placeholder="Your Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#BF40BF] hover:bg-[#ee6dee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BF40BF]"
              >
                Register
              </button>
              <Link  to={"/"}
                className="text-[12px] underline text-blue-700"
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
