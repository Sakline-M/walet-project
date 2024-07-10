import { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
    <div className={`flex ${isSidebarOpen ? 'w-64 mt-[100px]' : 'w-16'} bg-[#EEEDEB] transition-width duration-300 z-10  h-full`}>
      <div className="flex flex-col h-full w-full">
        <button
          className="bg-[#FFFF] text-gray-800 py-2 px-4 border-b border-[#BF40BF]"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>
        {isSidebarOpen && (
          <>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${activeCategory === 'category1' ? 'bg-[#BF40BF] text-white' : 'bg-[#FFFF]'} text-gray-800`}
                onClick={() => toggleCategory('category1')}
              >
                Properties
              </button>
              {openCategory === 'category1' && (
                <div className="absolute left-full top-0 border-l border-gray-200 py-2 px-4 ">
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Sale' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Sale')}
                  >
                    For Sale
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Rent' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Rent')}
                  >
                    For Rent
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Communities' ? 'bg-white pl-1 rounded text-[#BF40BF]' : ''}`}
                    onClick={() => handleSubcategoryClick('Communities')}
                  >
                    Communities
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Other' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Other')}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${activeCategory === 'category2' ? 'bg-[#BF40BF] text-white' : 'bg-[#FFFF]'} text-gray-800`}
                onClick={() => toggleCategory('category2')}
              >
                Products
              </button>
              {openCategory === 'category2' && (
                <div className="absolute left-full top-0 border-l border-gray-200 py-2 px-4">
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'food' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('food')}
                  >
                    Food
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'transport' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('transport')}
                  >
                    Transportation
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Technology' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Technology')}
                  >
                    Technology
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Retail' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Retail')}
                  >
                    Retail
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'other' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('other')}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${activeCategory === 'category3' ? 'bg-[#BF40BF] text-white' : 'bg-[#FFFF]'} text-gray-800`}
                onClick={() => toggleCategory('category3')}
              >
                Services
              </button>
              {openCategory === 'category3' && (
                <div className="absolute left-full top-0  border-l border-gray-200 py-2 px-4">
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Jobs' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Jobs')}
                  >
                    Jobs
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Excorts' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Excorts')}
                  >
                    Excorts
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Events' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Events')}
                  >
                    Events
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Agencies' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Agencies')}
                  >
                   Agencies
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Education' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Education')}
                  >
                    Education
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'other' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('other')}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`w-full text-left py-2 px-4 border-b border-[#BF40BF] text-xl ${activeCategory === 'category4' ? 'bg-[#BF40BF] text-white' : 'bg-[#FFFF]'} text-gray-800`}
                onClick={() => toggleCategory('category4')}
              >
                Budget
              </button>
              {openCategory === 'category4' && (
                <div className="absolute left-full top-0  border-l border-gray-200 py-2 px-4">
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Items' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Items')}
                  >
                    Items
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Image' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Image')}
                  >
                    Image
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Text' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Text')}
                  >
                    Text
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Price' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Price')}
                  >
                    Price
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Contact' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Contact')}
                  >
                    Contact
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Commute' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Commute')}
                  >
                    Commute
                  </p>
                  <p
                    className={`cursor-pointer mb-2 ${activeSubcategory === 'Mark' ? 'bg-white text-[#BF40BF] pl-1 rounded' : ''}`}
                    onClick={() => handleSubcategoryClick('Mark')}
                  >
                    Mark as Done
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
