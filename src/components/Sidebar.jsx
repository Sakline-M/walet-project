import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Import icons for menu and close

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCategory = (category) => {
    if (openCategory === category) {
      setOpenCategory(null);
      setActiveCategory(null);
    } else {
      setOpenCategory(category);
      setActiveCategory(category);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  return (
    <div
      className={`flex ${
        isSidebarOpen ? "w-64 mt-[100px]" : "w-16"
      } bg-[#EEEDEB] transition-width duration-300 z-10  h-full`}
    >
      <div className="flex flex-col h-full w-full">
        <button
          className="bg-[#FFFF] text-gray-800 py-2 px-4 border-b border-[#BF40BF] flex items-center justify-center"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <HiOutlineX className="text-xl" />
          ) : (
            <HiOutlineMenu className="text-xl" />
          )}
        </button>
        {isSidebarOpen && (
          <>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${
                  activeCategory === "category1"
                    ? "bg-[#BF40BF] text-white"
                    : "bg-[#FFFF]"
                } text-gray-800`}
                onClick={() => toggleCategory("category1")}
              >
                Properties
              </button>
              {openCategory === "category1" && (
                <div className="absolute left-full top-0 border-l border-gray-200 py-2 px-4">
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Sale"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Sale")}
                  >
                    For Sale
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Rent"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Rent")}
                  >
                    For Rent
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Communities"
                        ? "bg-white pl-1 rounded text-[#BF40BF]"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Communities")}
                  >
                    Communities
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Other"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Other")}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${
                  activeCategory === "category2"
                    ? "bg-[#BF40BF] text-white"
                    : "bg-[#FFFF]"
                } text-gray-800`}
                onClick={() => toggleCategory("category2")}
              >
                Products
              </button>
              {openCategory === "category2" && (
                <div className="absolute left-full top-0 border-l border-gray-200 py-2 px-4">
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "food"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("food")}
                  >
                    Food
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "transport"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("transport")}
                  >
                    Transportation
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Technology"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Technology")}
                  >
                    Technology
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Retail"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Retail")}
                  >
                    Retail
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "other"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("other")}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${
                  activeCategory === "category3"
                    ? "bg-[#BF40BF] text-white"
                    : "bg-[#FFFF]"
                } text-gray-800`}
                onClick={() => toggleCategory("category3")}
              >
                Services
              </button>
              {openCategory === "category3" && (
                <div className="absolute left-full top-0 border-l border-gray-200 py-2 px-4">
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Jobs"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Jobs")}
                  >
                    Jobs
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Escorts"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Escorts")}
                  >
                    Escorts
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Events"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Events")}
                  >
                    Events
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Agencies"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Agencies")}
                  >
                    Agencies
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Education"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Education")}
                  >
                    Education
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "other"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("other")}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${
                  activeCategory === "category4"
                    ? "bg-[#BF40BF] text-white"
                    : "bg-[#FFFF]"
                } text-gray-800`}
                onClick={() => toggleCategory("category4")}
              >
                Budget
              </button>
              {openCategory === "category4" && (
                <div className="absolute left-full top-0 border-l border-gray-200 py-2 px-4">
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Items"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Items")}
                  >
                    Items
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Image"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Image")}
                  >
                    Image
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Setting"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Setting")}
                  >
                    Setting
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Chat"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Chat")}
                  >
                    Chat
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${
                      activeSubcategory === "Other"
                        ? "bg-white text-[#BF40BF] pl-1 rounded"
                        : ""
                    }`}
                    onClick={() => handleSubcategoryClick("Other")}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
