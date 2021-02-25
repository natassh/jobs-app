import { JobType } from "../../../ui/modules/jobs/contexts/JobContext";
import jobs from "./jobsFixture.json"
const getJobListPagedFake = (description:string, location:string, fullTime:boolean, pageNumber:number): JobType[] => {
  return jobs
};

export { getJobListPagedFake };