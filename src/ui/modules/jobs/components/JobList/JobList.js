import React from 'react';
import Job from '../Job';
import './JobList.css';

const JobList = ({ jobs }) => {
  console.log('listado: ,', jobs)
  
  return (
    <ul className="JobList">
      {jobs.map(job => {
        return (
          <Job
            key={job.id}
            id={job.id}
            companyLogo={job.company_logo}
            createdAlt={job.created_at}
            url={job.url}
            type={job.type}
            title={job.title}
            company={job.company}
            companyLogo={job.company_logo}
          />
        );
      })}
    </ul>
  );
};

export default JobList;

