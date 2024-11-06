import React from "react";
import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

const JobDetails = ({ job }) => {
  console.log("job from JobDetails", job);

  return (
    <div>
      {job && (
        <div className="productdetailsBox">
          <div className="JobApplyHeader">
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="JobHeadingIcon"
            />
            <div className="jobheading">
              <h2>{job.title}</h2>
              <h5>
                {job.company && job.company.display_name},{" "}
                {job.location && job.location.display_name}
              </h5>
            </div>
            <button className="applybtn">Apply Now</button>
            <button className="savebtn">Save</button>
            <hr />
          </div>
          <div className="JobDescriptionContainer">
            <p>{job.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
