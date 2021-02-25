import React, {useContext} from 'react';
import {JobContext} from '../../contexts/JobContext'
import Loading from "../../../../components/Loading"
import Job from '../Job';
import './JobList.css';

const JobList: React.FC = () => {
  const { currentPage, setPage, hasMorejobs, jobsFiltered, getJobsPaged } = useContext(JobContext);
  
  const handleOnClick = (e: React.MouseEvent) :void => {
    e.preventDefault();
    setPage(currentPage + 1);
    getJobsPaged();
  }

  if(jobsFiltered.length === 0 ) {
    return <Loading/>
  }
  
  return (
    <>
      <ul className="JobList">
        {jobsFiltered.map((job: any) => {
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





