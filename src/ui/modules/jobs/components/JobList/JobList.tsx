import React from 'react';
import Job from '../Job';
 import {JobType} from '../../contexts/JobContext'
import './JobList.css';

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  console.log('listado: ,', jobs)

  // const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) :void => {
  const handleOnClick = (e: React.MouseEvent) :void => {
    e.preventDefault();
    console.log("Load MOre")
  }
  return (
    <>
    <ul className="JobList">
      {jobs.map((job: any) => {
        return (
          <Job
            key={job.id}
            id={job.id}
            companyLogo={job.company_logo}
            createdAlt={job.created_at}
            type={job.type}
            title={job.title}
            company={job.company}
            location={job.location}
          />
        );
      })}
    </ul>
    <a href="#" className="LoadMore" onClick={handleOnClick}>
      Load More
    </a>
  </>
  );
};

export default JobList;

type JobListProps = {
  jobs: JobType[],
}



