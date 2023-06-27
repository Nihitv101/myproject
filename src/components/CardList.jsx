/* eslint-disable no-unused-vars */
// import jsonData from "../constants/datafile";
// import Card from "../components/Card";

// const CardList = () => {
//   return (
//     <div className="mt-5 p-2">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {jsonData.map((data) => (
//           <div key={data.name}>
//             <Card data={data} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardList;

import { MdFilterList } from "react-icons/md";

import { BsSearch } from "react-icons/bs";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import jsonData from "../constants/datafile";
import Card from "../components/Card";

const CardList = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurningChecked, setIsBurningChecked] = useState(false);
  const [isSubscriptionChecked, setIsSubscriptionChecked] = useState(false);

  const loadMoreData = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const newData = jsonData.slice(startIndex, endIndex);

    setCardsData([...cardsData, ...newData]);

    if (endIndex >= jsonData.length) {
      setHasMore(false);
    }
  }, [currentPage]);

  useEffect(() => {
    let filteredCards = cardsData;

    if (isBurningChecked || isSubscriptionChecked) {
      filteredCards = cardsData.filter(
        (data) =>
          (isBurningChecked && data.card_type === "burner") ||
          (isSubscriptionChecked && data.card_type === "subscription")
      );
    }

    if (searchQuery) {
      filteredCards = filteredCards.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filteredCards);
  }, [searchQuery, cardsData, isBurningChecked, isSubscriptionChecked]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleApplyFilters = () => {
    setIsModalOpen(false);
  };

  const handleBurningChange = (e) => {
    setIsBurningChecked(e.target.checked);
  };

  const handleSubscriptionChange = (e) => {
    setIsSubscriptionChecked(e.target.checked);
  };

  return (
    <div className="mt-5 p-2">
    
      <div className="flex items-center gap-4 mb-5 lg:mr-12 md:justify-end justify-center">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BsSearch />
          </div>
        </div>

        <span
          className="flex gap-1 bg-gray-200 rounded-md p-2 cursor-pointer"
          onClick={handleModalOpen}
        >
          <MdFilterList className="text-lg mt-1" />
          Filter
        </span>
      </div>

      <InfiniteScroll
        dataLength={filteredData.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>No more data</h4>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredData.map((data) => (
            <div key={data.owner_id}>
              <Card data={data} />
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {isModalOpen && (
        <div className="fixed top-[160px] right-0 w-full h-[300px] z-50 flex  justify-end">
          <div className="bg-white p-4 rounded-md flex flex-col gap-3 w-[400px]">
            <h2 className="mb-2 text-gray-600">Filters</h2>

            <hr />

            <p>Type</p>

            <div className="flex gap-4">
              <label>
                <input
                  type="checkbox"
                  checked={isBurningChecked}
                  onChange={handleBurningChange}
                  className="mr-2"
                />
                Burning Cards
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={isSubscriptionChecked}
                  onChange={handleSubscriptionChange}
                  className="mr-2"
                />
                Subscription Cards
              </label>
            </div>

            <div className="flex mt-2 gap-6">
              <button
                onClick={handleApplyFilters}
                className="w-1/2 bg-red-400 p-2 text-white rounded-md"
              >
                Apply Filters
              </button>

              <button
                onClick={handleModalClose}
                className="w-1/2 text-gray-700 bg-gray-200 p-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
