import { FiltersType } from '../JobContext';
import { JobType } from '../JobContext';

const getJobsFilteredAction = (filtersForm:FiltersType, jobs:JobType[]) => {
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
    return newsJobsFiltered
}

export { getJobsFilteredAction }
