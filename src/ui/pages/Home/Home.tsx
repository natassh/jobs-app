import React, { useContext } from 'react';
import JobList from '../../modules/jobs/components/JobList';
 import { JobContext } from '../../modules/jobs/contexts/JobContext';
import './Home.css';

const Home: React.FC  = () => {
  const { jobs } = useContext(JobContext);
  return (
    <>
      <main>
        <div className="cw">
          {jobs.length > 0 && <JobList jobs={jobs} />}
        </div>
      </main>
    </>
  );
};

export default Home;