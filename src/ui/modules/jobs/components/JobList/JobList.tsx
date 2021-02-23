import React, {useContext} from 'react';
import {JobType, JobContext} from '../../contexts/JobContext'
import Job from '../Job';
import './JobList.css';

const JobList: React.FC<JobListProps> = ({ jobs }) => {

  const { currentPage, setPage, hasMorejobs } = useContext(JobContext);
  
  const handleOnClick = (e: React.MouseEvent) :void => {
    e.preventDefault();
    setPage(currentPage + 1);
  }
  
  return (
    <>
      <ul className="JobList">
        {jobs.map((job: any) => {
          return (
            <Job
              // key={job.id}
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
      {hasMorejobs && (
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





