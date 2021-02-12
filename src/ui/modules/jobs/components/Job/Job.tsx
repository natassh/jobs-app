import React from 'react';
import './Job.css';
import { Link } from 'react-router-dom';

const Job: React.FC<JobProps> = ({ id, createdAlt, type, title, company, companyLogo, location }) => {
  const dateToday: any = new Date(); // Fri Feb 12 2021 13:00:42 GMT+0100 (hora estándar de Europa central)
  const stringDateToday = dateToday.toString()
  const today = Date.parse(stringDateToday) 

  const dateCreateOffer = createdAlt; // Fri Feb 12 11:00:23 UTC 2021
  const dateOffer =Date.parse(dateCreateOffer) 

  const b = today - dateOffer
  console.log(b) 

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

type JobProps = {
  id: number,
  createdAlt: any,
  type: string,
  title: string, 
  company: string,
  companyLogo: string,
  location: string,
}

// "Fri Oct 09 19:42:30 UTC 2020"