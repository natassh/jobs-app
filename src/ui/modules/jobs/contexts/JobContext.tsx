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
  setFilters: any, 
  pageNumber: number,
  showButtonLoadMore:boolean,
  setPageNumber: any
  // initJobList: Promise<boolean>,
  // initJobList: () =>  void,
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<JobType[]>([]);

  const [filters, setFilters] = useState<FilterType>({
    description: "",
    location: "",
    fullTime: false
  })

  const [pageNumber, setPageNumber] = useState(1);

  const [showButtonLoadMore, setShowButtonLoadMore] = useState(true);

  useEffect(() => {
    initJobList(filters, pageNumber);
  }, [filters, pageNumber]);

  const initJobList = async (filters:FilterType, pageNumber: number) => {
    const { description, location, fullTime } = filters;
    const jobList = await getJobList(description, location, fullTime, pageNumber);
    if(jobList.length < 50) {
      setShowButtonLoadMore(false)
    }
     const newJobList = jobs.concat(jobList)
     setJobs(newJobList);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        pageNumber,
        showButtonLoadMore,
        setFilters,
        setPageNumber,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;


