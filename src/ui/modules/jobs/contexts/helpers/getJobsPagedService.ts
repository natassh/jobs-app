import {FiltersType, JobType } from '../JobContext';
import {getJobListPaged} from "../../../../../core/services/jobs/getJobListPaged";
//import {getJobListPagedFake as getJobListPaged} from "../../../../../core/services/jobs/getJobListPagedFake"

const getJobsPagedService = async (filters:FiltersType, pageNumber: number): Promise<JobType[]> => {
   const { description, location, fullTime } = filters;
  const jobList: JobType[] = await getJobListPaged(description, location, fullTime, pageNumber);
  return jobList;
} 
export {getJobsPagedService}
