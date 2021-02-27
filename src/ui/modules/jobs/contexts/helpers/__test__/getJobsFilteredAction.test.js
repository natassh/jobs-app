import { getJobsFilteredAction } from '../getJobsFilteredAction';
import jobs from "../fixtures/jobsFixture.json"

describe('getJobsFilteredAction', () => {
  it('should return an array with the filtered jobs', () => {
    // Arrenge 
    const filters = {
      description: "Developer",
      location: "",
      fullTime: false
    };

    // Act
    const newJobs = getJobsFilteredAction(filters, jobs);

    // Assert
    expect(newJobs).toHaveLength(2);

  })
})
