import React from 'react';
import './Job.css';
import { Link } from 'react-router-dom';

function Job({ id, createdAlt, type, title, company, companyLogo, location }) {
  return (
    <li>
      {companyLogo && (
        <figure>
          <img src={companyLogo} alt={company} />
        </figure>
      )}
      <p className="JobList__data">
        <em>{createdAlt}</em>
        <em>{type}</em>
      </p>
      <Link to={`/job/${id}`} key={id}>
        <h2>{title}</h2>
      </Link>
      <p className="JobList__company">{company}.</p>
      <ul className="categorieList">
        <li>{type},</li>
        <li>{location} </li>
      </ul>
    </li>
  );
}
export default Job;

