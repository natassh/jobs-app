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
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const FIRST_PAGE_WITH_RESULTS = 1;

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<JobType[]>([]);
  console.log('jobs: ', jobs)
  const [filters, setFilters] = useState<FiltersType>({
    description: "",
    location: "",
    fullTime: false
  })
  const [currentPage, setPage] = useState<number>(FIRST_PAGE_WITH_RESULTS);
  const [hasMorejobs, setHasMorejobs] = useState<boolean>(true);

  const [jobsFiltered, setJobsFiltered] = useState<JobType[]>([]);
  console.log('jobsFiltered: ', jobsFiltered)

  useEffect(() => {
    const getJobs = async () => {
      const jobsLoad: JobType[] = await getJobsService(/*filters, currentPage,*/ jobs);
      if(jobsLoad.length < 50) {
        setHasMorejobs(false)
      }
      setJobs(jobsLoad);
      setJobsFiltered(jobsLoad);
    }
    getJobs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, currentPage]);



  const getJobsFiltered = (filtersForm:FiltersType) => {
    // console.log('filtersForm: ', filtersForm);
     let newsJobsFiltered:JobType[]= jobs;

    // Si tengo el filro de description
    if(filtersForm.description) {
      newsJobsFiltered = newsJobsFiltered.filter(job => job.title.toLowerCase().includes(filtersForm.description.toLowerCase()));
      // console.log(newsJobsFiltered)
      // let newJobs: JobType[] = [...jobsFiltered, ...newsJobsFiltered];
      // setJobsFiltered(newJobs)
    }
    // Si tengo el filro de location, lo añado al filtrado
    if(filtersForm.location) {
      console.log('location')
      newsJobsFiltered = newsJobsFiltered.filter(job => job.location === filtersForm.location);
      // let newJobs:any = [...jobsFiltered, newsJobsFiltered];
      // setJobsFiltered(newJobs)
    }
    // Si tengo el filro de fulltime, lo añado al filtrado
    console.log(filtersForm.fullTime)
    if(filtersForm.fullTime) {
      console.log('fullTime')
      newsJobsFiltered = newsJobsFiltered.filter(job => {
        console.log('job', job)
        if (job.type === "Full Time") {
          console.log('job Full', job)
          return job;
        }
      });
      // let newJobs:any = [...jobsFiltered, newsJobsFiltered];
      // setJobsFiltered(newJobs)
    }

    console.log('newsJobsFiltered: ', newsJobsFiltered)
    setJobsFiltered(newsJobsFiltered)
  }

  const getJobsFiltered3 = (filtersForm:FiltersType) => {
    // console.log('filtersForm: ', filtersForm);
     // let newsJobsFiltered:JobType[]= jobs;

    const newJobs =  jobs.filter(job => {
      console.log('job', job)
      let isJobFiltrable = false;
      if(
        (filtersForm.description && job.title === filtersForm.description)
        || (filtersForm.location && job.location === filtersForm.location)
        || (filtersForm.fullTime && job.type === "Full Time")
      ) {
        isJobFiltrable = true; 
      } else {
        isJobFiltrable = false;
      }

      return isJobFiltrable ? job : false;
    });

    console.log('newsJobsFiltered: ', newJobs)
    setJobsFiltered(newJobs)
  }

  const getJobsFiltered4 = (filtersForm:FiltersType) => {
    // console.log('filtersForm: ', filtersForm);
     // let newsJobsFiltered:JobType[]= jobs;
    const clearFilters = [];
    if(filtersForm.description !== '') {
      clearFilters.push('description')
    }
    if(filtersForm.location !== '') {
      clearFilters.push('location')
    }
    if(filtersForm.fullTime) {
      clearFilters.push('fullTime')
    }

    const newJobs =  jobs.filter(job => {
      console.log('job', job)
      let isJobFiltrable = false;

      if(
        (filtersForm.description && job.title === filtersForm.description)
        || (filtersForm.location && job.location === filtersForm.location)
        || (filtersForm.fullTime && job.type === "Full Time")
      ) {
        isJobFiltrable = true; 
      } else {
        isJobFiltrable = false;
      }

      return isJobFiltrable ? job : false;
    });

    console.log('newsJobsFiltered: ', newJobs)
    setJobsFiltered(newJobs)
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
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;


