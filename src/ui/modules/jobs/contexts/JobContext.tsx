import React, { createContext, useState, useEffect} from 'react';
import {getJobsService} from "./helpers/getJobsService"
import {getJobsPagedService} from "./helpers/getJobsPagedService"

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
  getJobsFiltered: (filtersForm: FiltersType) => void
  getJobsPaged: () => void
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
  const [currentPage, setPage] = useState<number>(FIRST_PAGE_WITH_RESULTS);
  const [hasMorejobs, setHasMorejobs] = useState<boolean>(true);
  const [jobsFiltered, setJobsFiltered] = useState<JobType[]>([]);

  useEffect(() => {
    const getJobs = async () => {
      const jobsLoad: JobType[] = await getJobsService(jobs);
      if(jobsLoad.length < 50) {
        setHasMorejobs(false);
      }

      setJobs(jobsLoad);
      setJobsFiltered(jobsLoad);
    }
    getJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);



  const getJobsFiltered = (filtersForm:FiltersType) => {
    let newsJobsFiltered:JobType[]= jobs;

    if(filtersForm.description) {
      newsJobsFiltered = newsJobsFiltered.filter((job: JobType) => job.title.toLowerCase().includes(filtersForm.description.toLowerCase()));
    }
    if(filtersForm.location) {
      newsJobsFiltered = newsJobsFiltered.filter((job: JobType) => job.location.toLowerCase().includes(filtersForm.location.toLowerCase()));
    }
    if(filtersForm.fullTime) {
      newsJobsFiltered = newsJobsFiltered.filter((job: JobType) => job.type === "Full Time");
    }
    if(newsJobsFiltered.length < 50) {
      setHasMorejobs(false);
    }
    setJobsFiltered(newsJobsFiltered);
    setPage(FIRST_PAGE_WITH_RESULTS);
  }

  const getJobsPaged = async () => {
    const paginatedJobs: JobType[] = await getJobsPagedService(filters, currentPage);
    if(paginatedJobs.length < 50) {
      setHasMorejobs(false);
    }
    const newJobList = jobsFiltered.concat(paginatedJobs)
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


