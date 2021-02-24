import {FiltersType, JobType } from '../JobContext';
//import {getJobList} from "../../../../../core/services/jobs/getJobList";
import {getJobListFake as getJobList} from "../../../../../core/services/jobs/getJobListFake"

export const getJobsService = async (/*filters:FiltersType, pageNumber: number,*/ jobs:JobType[]): Promise<JobType[]> => {
  // const { description, location, fullTime } = filters;
  const jobList: JobType[] = await getJobList(/*description, location, fullTime, pageNumber*/);
  const newJobList = jobs.concat(jobList)
  return newJobList;
} 
