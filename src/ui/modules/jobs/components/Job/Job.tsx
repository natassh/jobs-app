import React from 'react';
import defaultImage from '../../../../assets/images/defaultImage.svg';
import './Job.css';
import { Link } from 'react-router-dom';
import {getTimeDifference} from "../../../.././../core/services/utils"

const Job: React.FC<JobProps> = ({ id, createdAlt, type, title, company, companyLogo, location }) => {
  
  // Get Time difference
  const current:any = Date();
  const timeDifference = getTimeDifference(current, createdAlt);
  console.log('timeDifference: ', timeDifference);
  
  return (
    <li>
       <figure>
        {companyLogo === null
          ? <img src={defaultImage} alt="Imagen de un logo por defecto" />
          : <img src={companyLogo} alt={company} />
        }
      </figure>
      <p className="jobData">
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
