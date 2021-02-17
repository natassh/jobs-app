import React, { createContext, useState, useEffect} from 'react';
import {getJobList} from "../../../../core/services/jobs/getJobList"

export type JobType =  {};
export type FilterType =  {
  description: string,
  location: string,
  fullTime: boolean
};

type JobContextProps = {
  jobs: JobType[],
  setFilters: any
  // initJobList: Promise<boolean>,
  // initJobList: () =>  void,
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<JobType[]>([]);
  // console.log('jobs:', jobs);

  const [filters, setFilters] = useState<FilterType>({
    description: "",
    location: "",
    fullTime: false
  })
  // console.log('filters:', filters);

  useEffect(() => {
    initJobList(filters);
  }, [filters]);

  const initJobList = async (filters:FilterType) => {
    const { description, location, fullTime } = filters;
    const jobList = await getJobList(description, location, fullTime);
    setJobs(jobList);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;


