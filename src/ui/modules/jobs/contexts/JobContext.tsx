import React, { createContext, useState, useEffect} from 'react';
import {getJobsService} from "./helpers/getJobsService"

export type JobType =  {
  company: string;
  company_logo: string | null;
  company_url: string | null;
  created_at: string;
  description: string;
  how_to_apply:string;
  id: string;
  location: string;
  title:string;
  type: string;
  url: string,
};
export type FiltersType =  {
  description: string,
  location: string,
  fullTime: boolean
};

type JobContextProps = {
  jobs: JobType[],
  currentPage: number,
  hasMorejobs:boolean,
  filters: FiltersType
  setFilters: (filters: FiltersType) => void, 
  setPage: (page: number) => void
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const FIRST_PAGE_WITH_RESULTS = 1;

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [filters, setFilters] = useState<FiltersType>({
    description: "",
    location: "",
    fullTime: false
  })

  const [currentPage, setPage] = useState(FIRST_PAGE_WITH_RESULTS);
  const [hasMorejobs, setHasMorejobs] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      const newJobList: JobType[] = await getJobsService(filters, currentPage, jobs);
      if(newJobList.length < 50) {
        setHasMorejobs(false)
      }
      setJobs(newJobList);
    }
    getJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, currentPage]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        filters,
        currentPage,
        hasMorejobs,
        setFilters,
        setPage,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;


