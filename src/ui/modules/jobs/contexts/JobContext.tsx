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
  pageNumber: number,
  showButtonLoadMore:boolean,
  filters: FiltersType
  setFilters: (filters: FiltersType) => void, 
  setPageNumber: (page: number) => void
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

  const [pageNumber, setPageNumber] = useState(FIRST_PAGE_WITH_RESULTS);
  const [showButtonLoadMore, setShowButtonLoadMore] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      const newJobList: JobType[] = await getJobsService(filters, pageNumber, jobs);
      if(newJobList.length < 50) {
        setShowButtonLoadMore(false)
      }
      setJobs(newJobList);
    }
    getJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, pageNumber]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        filters,
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


