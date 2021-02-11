import React from 'react';
import './Job.css';
import { Link } from 'react-router-dom';

function Job({ id, createdAlt, url, type, title, company, companyLogo }) {
  return (
    <li>
      <img src={companyLogo} />
      <p>
        <em>{createdAlt}</em>
        <em>{type}</em>
      </p>
      <Link to={`/job/${id}`} key={id}>
        <h2>{title}</h2>
      </Link>
      <p>{company}.</p>
      <ul className="categorieList">
        <li>Remote,</li>
        <li>Seoul ,</li>
        <li>Tokyo ,</li>
        <li>Mountain View,</li>
        <li>San Fransisco</li>
      </ul>
    </li>
  );
}
export default Job;

