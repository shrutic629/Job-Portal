import React, { useEffect, useState, useContext } from "react";
import "./JobFilters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { SearchContext } from "../../contexts/SearchContext";

const JobFilters = ({ data }) => {
  const [search, setSearch] = useState("");

  const { searchFilters, setSearchFilters } = useContext(SearchContext);

  //   useEffect(() => {
  //     fetchTitle();
  //   });

  const handleSearchTermChange = (e) => {
    // e.preventDefault();
    setSearchFilters({ ...searchFilters, searchTerm: e.target.value });
  };

  const updateFilters = () => {};

  //   const fetchTitle = async () => {
  //     const data = await axios.get(
  //       `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=c572996d&app_key=faca31ee8b42fbfddb1574a29cb11d63&what=${search}`
  //     );
  //     console.log(">>>>>>>>>>>data>>>>>>>>>>>", data);
  //   };
  //   console.log(">>>>>>>>>>>search>>>>>>>>>>>>", search);

  return (
    <div className="jobFilterMainBox">
      <div className="jobfilterbox">
        <input
          type="text"
          placeholder="Search Jobs"
          className="searchbox"
          onChange={handleSearchTermChange}
        />
        <div className="searchdropdown">
          <label>Location: </label>
          <select>
            <option>Berlin</option>
            <option>India</option>
            <option>America</option>
          </select>
        </div>
        <div className="searchdropdown">
          <label>Job Type: </label>
          <select>
            <option>Intern</option>
            <option>Fresher</option>
            <option>Experienced</option>
          </select>
        </div>
        <div className="searchdropdown">
          <label>Industry: </label>
          <select>
            <option>Tech</option>
            <option>Pharma</option>
            <option>CA</option>
          </select>
        </div>
        <div className="searchdropdown">
          <label>Experience: </label>
          <select>
            <option>1 year</option>
            <option>2 years</option>
            <option>3 years</option>
            <option>4 years</option>
          </select>
        </div>
        <input placeholder="More Filters" />
        <button className="applybtn" onClick={updateFilters()}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobFilters;
