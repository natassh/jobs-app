import React from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import JobsForm from '../../modules/jobs/components/JobsForm';
import JobList from '../../modules/jobs/components/JobList';
import './Home.css';

const Home: React.FC  = () => {
  return (
    <main>
      <WrapperLayout>
        <JobsForm />
        <JobList/>
      </WrapperLayout>
    </main>
  );
};

export default Home;

