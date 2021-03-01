import {JobType} from '../JobContext';
import {getJobList} from "../../../../../core/services/jobs/getJobList";
//import {getJobListFake as getJobList} from "../../../../../core/services/jobs/getJobListFake"

const getJobsService = async (jobs:JobType[]): Promise<JobType[]> => {
  const jobList: JobType[] = await getJobList();
  const newJobList = [...jobs, ...jobList]
  return newJobList;
} 

export {getJobsService}
