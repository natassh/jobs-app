import React from 'react';
import defaultImage from '../../../../assets/images/defaultImage.svg';
import './Job.css';
import { Link } from 'react-router-dom';

const Job: React.FC<JobProps> = ({ id, createdAlt, type, title, company, companyLogo, location }) => {
  
  return (
    <li>
       <figure>
        {companyLogo === null
          ? <img src={defaultImage} alt="Imagen de un logo por defecto" />
          : <img src={companyLogo} alt={company} />
        }
      </figure>
      <p className="JobData">
        {/* <em>{createdAlt}</em> */}
        <em>1mo ago</em>
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
