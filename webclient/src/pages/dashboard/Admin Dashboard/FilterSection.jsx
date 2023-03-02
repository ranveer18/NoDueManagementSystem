import React from "react";
import { FaFilter } from "react-icons/fa";

const filter = () => {
  return (
    <>
      <div className="admin__search__container">
        {/* <div className="admin__search__filter">
          <div className="filter_icon">
            <FaFilter />
          </div>
          <input
            type="text"
            className="filter__branch input"
            placeholder="All Branch"
          /> */}
        {/* <input
            type="text"
            className="filter__addmission input"
            placeholder="Year of Addmission"
          /> */}
        {/* </div> */}
        <div className="admin__search__search">
          <div className="filter_icon">
            <FaFilter />
          </div>
          <input
            type="text"
            className="filter__registration input"
            placeholder="Search by Registration "
          />
          <div className="search__button">Search</div>
        </div>
        {/* <DasboardForm /> */}
      </div>
    </>
  );
};

export default filter;
