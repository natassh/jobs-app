import React, { useContext } from 'react';
import { JobContext } from '../../modules/jobs/contexts/JobContext';
import WrapperLayout from '../../components/WrapperLayout';
import JobsForm from '../../modules/jobs/components/JobsForm';
import JobList from '../../modules/jobs/components/JobList';
import Loading from "../../components/Loading"
import './Home.css';

const Home: React.FC  = () => {
  const { jobs } = useContext(JobContext);
  
  if(jobs.length === 0 ) {
    return <Loading/>
  }
  return (
    <main>
      <WrapperLayout>
        <JobsForm />
        {/* { jobs.length === 0
          ? <Loading/>
          : <JobList jobs={jobs} />
        } */}
        <JobList jobs={jobs} />
      </WrapperLayout>
    </main>
  );
};

export default Home;

