import {FilterType, JobType } from './JobContext';
//import {getJobList} from "../../../../core/services/jobs/getJobList";
import {getJobListFake as getJobList} from "../../../../core/services/jobs/getJobListFake"
import JobList from '../components/JobList';

export const getJobsService = async (filters:FilterType, pageNumber: number, jobs:JobType[]): Promise<JobType[]> => {
  const { description, location, fullTime } = filters;
  const jobList: JobType[] = await getJobList(description, location, fullTime, pageNumber);
  //const newJobList = jobs.concat(jobList)
  const newJobList = [...jobs, ...jobList]
  return newJobList;
} 
