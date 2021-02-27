import React from 'react';
import { Link } from 'react-router-dom';
import {getTimeDifference} from "../../../.././../core/services/utils"
import defaultImage from '../../../../assets/images/defaultImage.svg';
import './Job.css';

const Job: React.FC<JobProps> = ({ id, createdAlt, type, title, company, companyLogo, location }) => {
  const timeDifference = getTimeDifference(createdAlt);
  
  return (
    <>
       <figure>
        {companyLogo === null
          ? <img src={defaultImage} alt="Imagen de un logo por defecto" />
          : <img src={companyLogo} alt={company} />
        }
      </figure>
      <p className="jobData">
        <em>{timeDifference}</em>
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
    </>
  );
}
export default Job;

type JobProps = {
  id: string,
  createdAlt: string,
  type: string,
  title: string, 
  company: string,
  companyLogo: string,
  location: string,
}
