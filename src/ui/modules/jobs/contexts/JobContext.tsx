import React, { createContext, useState, useEffect} from 'react';
import {getJobsService} from "./helpers/getJobsService"
import {getJobsPagedService} from "./helpers/getJobsPagedService"
import {getJobsFilteredAction} from "./helpers/getJobsFilteredAction"

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
  fullTime: any
};

type JobContextProps = {
  jobs: JobType[],
  jobsFiltered: JobType[],
  currentPage: number,
  hasMorejobs:boolean,
  filters: FiltersType,
  setFilters: (filters: FiltersType) => void, 
  setPage: (page: number) => void,
  getJobsFiltered: (filtersForm: FiltersType, jobs:JobType[]) => void
  getJobsPaged: () => void
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const FIRST_PAGE_WITH_RESULTS = 1;
const JOBS_LOAD_NUMBER_FROM_API = 50;

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [filters, setFilters] = useState<FiltersType>({
    description: "",
    location: "",
    fullTime: false
  })
  const [currentPage, setPage] = useState<number>(FIRST_PAGE_WITH_RESULTS);
  const [hasMorejobs, setHasMorejobs] = useState<boolean>(true);
  const [jobsFiltered, setJobsFiltered] = useState<JobType[]>([]);
  useEffect(() => {
    const getJobs = async () => {
      const jobsLoad: JobType[] = await getJobsService(jobs);
      if(jobsLoad.length < JOBS_LOAD_NUMBER_FROM_API) {
        setHasMorejobs(false);
      }

      setJobs(jobsLoad);
      setJobsFiltered(jobsLoad);
    }
    getJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);


  const getJobsFiltered = (filtersForm:FiltersType, jobs:JobType[]) => {
    const newsJobsFiltered = getJobsFilteredAction(filtersForm, jobs)
    if(newsJobsFiltered.length < JOBS_LOAD_NUMBER_FROM_API) {
      setHasMorejobs(false);
    } else {
      setHasMorejobs(true);
    }
    setJobsFiltered(newsJobsFiltered);
    setPage(FIRST_PAGE_WITH_RESULTS);
  }

  const getJobsPaged = async () => {
    const paginatedJobs: JobType[] = await getJobsPagedService(filters, currentPage);
    if(paginatedJobs.length < JOBS_LOAD_NUMBER_FROM_API) {
      setHasMorejobs(false);
    }
    const newJobList = [...jobsFiltered, ...paginatedJobs]
    setJobsFiltered(newJobList);
  }

  return (
    <JobContext.Provider
      value={{
        jobs,
        jobsFiltered,
        filters,
        currentPage,
        hasMorejobs,
        setFilters,
        setPage,
        getJobsFiltered,
        getJobsPaged,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;


