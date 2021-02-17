import React, {useContext} from 'react';
import Job from '../Job';
import {JobType, JobContext} from '../../contexts/JobContext'
import './JobList.css';

const JobList: React.FC<JobListProps> = ({ jobs }) => {

  const { pageNumber, setPageNumber } = useContext(JobContext);
  
  const handleOnClick = (e: React.MouseEvent) :void => {
    e.preventDefault();
    setPageNumber(pageNumber + 1);
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
      {jobs !== [] && jobs.length > 48 && (
        <a href="#" className="LoadMore" onClick={handleOnClick}>
          Load More
        </a>
      )}
      
    </>
  );
};

export default JobList;

type JobListProps = {
  jobs: JobType[],
}





