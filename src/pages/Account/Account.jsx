/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaBriefcase, FaCar, FaCat, FaSignOutAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const AccountPage = () => {
  const navigate = useNavigate();

  const initialData = JSON.parse(localStorage.getItem("client")) || {
    name: "John Doe",
    location: "California, USA",
    profession: "",
    child: false,
    favoritePlace: "",
    carModel: "",
    cat: ""
  };

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialData.name);
  const [location, setLocation] = useState(initialData.location);
  const [profession, setProfession] = useState(initialData.profession);
  const [child, setChild] = useState(initialData.child);
  const [favoritePlace, setFavoritePlace] = useState(initialData.favoritePlace);
  const [carModel, setCarModel] = useState(initialData.carModel);
  const [cat, setCat] = useState(initialData.cat);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    const updatedData = {
      location,
      profession,
      child,
      favoritePlace,
      carModel,
      cat
    };
    localStorage.setItem("client", JSON.stringify(updatedData));
    setIsEditing(false);
    console.log("Profile updated:", updatedData);
  };

  const handleLogout = () => {
    localStorage.removeItem("client");
    navigate('/');
  };

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[100px]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-[#BF40BF] mb-6">Account Information</h1>
          {isEditing ? (
            <div className="w-full">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg flex items-center">
                    <FaUser className="mr-2" /> Name
                  </span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full text-lg"
                  placeholder="Name"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Location
                  </span>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input input-bordered w-full text-lg"
                  placeholder="Location"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg flex items-center">
                    <FaBriefcase className="mr-2" /> Profession
                  </span>
                </label>
                <input
                  type="text"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="input input-bordered w-full text-lg"
                  placeholder="Profession"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg flex items-center">
                    Has Child
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={child}
                    onChange={(e) => setChild(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-[#BF40BF]"
                  />
                  <span className="ml-2 text-lg">Yes</span>
                </label>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg flex items-center">
                    Favorite Place to Visit
                  </span>
                </label>
                <input
                  type="text"
                  value={favoritePlace}
                  onChange={(e) => setFavoritePlace(e.target.value)}
                  className="input input-bordered w-full text-lg"
                  placeholder="Favorite Place to Visit"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg flex items-center">
                    <FaCar className="mr-2" /> Car Model
                  </span>
                </label>
                <input
                  type="text"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="input input-bordered w-full text-lg"
                  placeholder="Car Model"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg flex items-center">
                    <FaCat className="mr-2" /> Cat
                  </span>
                </label>
                <input
                  type="text"
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="input input-bordered w-full text-lg"
                  placeholder="Cat"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleSave}
                  className="btn bg-[#BF40BF] text-white hover:bg-[#a534a5] mr-2"
                >
                  <FaSave className="mr-2" /> Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="btn bg-gray-500 text-white hover:bg-gray-600"
                >
                  <FaTimes className="mr-2" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-start">
              <p className="text-2xl text-black mb-4 flex items-center justify-center">
                <FaUser className="mr-2" /> <strong>Name:</strong> {name}
              </p>
              <p className="text-2xl text-black mb-4 flex items-center justify-center">
                <FaMapMarkerAlt className="mr-2" /> <strong>Location:</strong> {location}
              </p>
              <p className="text-2xl text-black mb-4 flex items-center justify-center">
                <FaBriefcase className="mr-2" /> <strong>Profession:</strong> {profession}
              </p>
              <p className="text-2xl text-black mb-4 flex items-center justify-center">
                <strong>Has Child:</strong> {child ? 'Yes' : 'No'}
              </p>
              <p className="text-2xl text-black mb-4 flex items-center justify-center">
                <strong>Favorite Place:</strong> {favoritePlace}
              </p>
              <p className="text-2xl text-black mb-4 flex items-center justify-center">
                <FaCar className="mr-2" /> <strong>Car Model:</strong> {carModel}
              </p>
              <p className="text-2xl text-black mb-4 flex items-center justify-center">
                <FaCat className="mr-2" /> <strong>Cat name:</strong> {cat}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleEditToggle}
                  className="btn bg-[#BF40BF] text-white hover:bg-[#a534a5]"
                >
                  <FaEdit className="mr-2" /> Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="btn bg-red-500 text-white hover:bg-red-600 ml-4"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
