import { JobType } from "../../../ui/modules/jobs/contexts/JobContext";
import jobs from "./jobsFixture.json"
const getJobListFake = (): JobType[] => {
  return jobs
};

export { getJobListFake };