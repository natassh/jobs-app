import { JobType } from "../../../ui/modules/jobs/contexts/JobContext";
import jobs from "./jobsFixture.json"
const getJobListFake = (/*description:string, location:string, fullTime:boolean, pageNumber:number*/): JobType[] => {
  return jobs
};

export { getJobListFake };