import React from "react";
import "./JobCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faPaperclip,
  faStar,
  faSquareCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const JobCard = ({ job, updateFunction }) => {
  const handleClick = () => {
    updateFunction(job);
  };

  return (
    <div className="jobsingleCard" onClick={handleClick}>
      <div className="productDesignBox">
        <div className="productLogo">
          <FontAwesomeIcon icon={faSquareTwitter} className="twitterLogo" />
        </div>
        <div className="productDesc">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
        <div className="productpinned">
          <FontAwesomeIcon icon={faPaperclip} />
        </div>
      </div>
      <div className="ratingBox">
        {job.company.display_name && (
          <div className="companyName">
            <FontAwesomeIcon icon={faBuilding} />
            <h5>{job.company.display_name}</h5>
          </div>
        )}

        {/* <div className="applicants">
            <h5>23 Applicants</h5>
          </div> */}
        <div className="verification">
          <FontAwesomeIcon icon={faLocationDot} />
          <h5>{job.location.display_name}</h5>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
