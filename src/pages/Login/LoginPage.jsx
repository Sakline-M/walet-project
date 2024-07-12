/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import toast from 'react-hot-toast';
import { json, Link, useNavigate } from 'react-router-dom';
import setTokenToLocalStroge from "./SetTokenToLocalStroage";
import setDataToLocalStorage from "../../components/storage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");


   //form function
   const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      email,
      password,
    };

    fetch(`http://localhost:5000/api/v1/user/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("user account login successfully");
          navigate("/");
          setTokenToLocalStroge(data?.data?.token);
          setDataToLocalStorage(data.data.userData)
          console.log(data);
        } else {
          setError(data.error);
        }
        console.log(data);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
            

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
              <Link to={'/register'} className='text-[12px] underline text-blue-700'>Don't have any account?</Link>
            </div>
          </form>
      </div>
    </div>
  );
};

export default LoginPage;
