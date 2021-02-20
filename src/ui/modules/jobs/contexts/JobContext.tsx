import React, { createContext, useState, useEffect} from 'react';
// import {getJobListFake as getJobList} from "../../../../core/services/jobs/getJobListFake"
import {getJobsService} from "./getJobsService"

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

export type FilterType =  {
  description: string,
  location: string,
  fullTime: boolean,
};

type JobContextProps = {
  jobs: JobType[],
  pageNumber: number,
  showButtonLoadMore:boolean,
  filters: FilterType
  setFilters: (filters: FilterType) => void, 
  setPageNumber: (page: number) => void
  // initJobList: Promise<boolean>,
  // initJobList: () =>  void,
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const FIRST_PAGE_WITH_RESUKTS = 1;

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [filters, setFilters] = useState<FilterType>({
    description: "",
    location: "",
    fullTime: false
  })

  console.log('filters', filters)

  const [pageNumber, setPageNumber] = useState(FIRST_PAGE_WITH_RESUKTS);
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


