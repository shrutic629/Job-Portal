import { useContext, useState } from "react";
import "./JobListing.css";
import JobCard from "../JobCard/JobCard";
import JobDetails from "../JobDetails/JobDetails";
import axios from "axios";
import { useEffect } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import useDebounce from "../../hooks/useDebounce";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});

  const { searchFilters } = useContext(SearchContext);
  console.log("search data from searchcontext -> ", searchFilters);

  const debouncedSearchTerm = useDebounce(searchFilters.searchTerm, 500);

  useEffect(() => {
    fetchJobs();
  }, [debouncedSearchTerm]);

  const fetchJobs = async () => {
    const res = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=c572996d&app_key=faca31ee8b42fbfddb1574a29cb11d63&title_only=${searchFilters.searchTerm}`
    );
    console.log(">>>>>>>>>res>>>>>>>>>>", res);
    setJobs(res.data.results);

    console.log(">>>>>>>jobs from call function>>>>>>", jobs);
    setSelectedJob(res.data.results[0]);
  };

  const updateJobSelection = (x) => {
    setSelectedJob(x);
  };

  return (
    <div className="productPageMainBox">
      <div className="productPagebox">
        <div className="productPageinnerbox">
          <div className="productCardsBoxL">
            <div className="jobPostBox">
              <div className="JobPostBoxLeft">
                <h6>Related to "UI/UX Designer"</h6>
                <p>28 Job Posting Available</p>
              </div>
              <div className="JobPostBoxRight">
                <label>Sort by: </label>
                <select>
                  <option value="">Relevance</option>
                </select>
              </div>
            </div>
            {jobs.map((job, idx) => {
              return (
                <JobCard
                  job={job}
                  key={job.id}
                  updateFunction={updateJobSelection}
                />
              );
            })}
          </div>
          <div className="productDesBoxR">
            <JobDetails job={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
