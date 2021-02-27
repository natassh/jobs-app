import { JobType } from "../../../ui/modules/jobs/contexts/JobContext";

const getJobDetail = async (id:number): Promise<JobType> => {
  const endPoint = `https://fancy-forest-f96a.proxycoors.workers.dev/?https://jobs.github.com/positions/${id}.json`;
  const jobResponseObject = await fetch(endPoint);
  const jobsData: JobType = await jobResponseObject.json();
  return jobsData;
};

export { getJobDetail };
