import React, { createContext, useState, useEffect} from 'react';
import {getJobList} from "../../../../core/services/jobs/getJobList"

export type JobType =  {} 

type JobContextProps = {
  jobs: JobType[],
  // initJobList: Promise<boolean>,
  // initJobList: () =>  void,
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<JobType[]>([]);
  
  useEffect(() => {
    initJobList();
  }, []);

  const initJobList = async () => {
    const jobList = await getJobList();
    setJobs(jobList);
  };


  return (
    <JobContext.Provider
      value={{
        jobs,
        
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;


