import { getJobsFilteredAction } from '../getJobsFilteredAction';
import jobs from "../fixtures/jobsFixture.json"

describe('getJobsFilteredAction', () => {
  it('should return an array with the filtered jobs by description', () => {
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
  it('should return an array with the filtered jobs by location', () => {
    // Arrenge 
    const filters = {
      description: "",
      location: "Berlin",
      fullTime: false
    };

    // Act
    const newJobs = getJobsFilteredAction(filters, jobs);

    // Assert
    expect(newJobs).toHaveLength(1);

  })
  it('should return an array with the filtered jobs by full time', () => {
    // Arrenge 
    const filters = {
      description: "",
      location: "",
      fullTime: true
    };

    // Act
    const newJobs = getJobsFilteredAction(filters, jobs);

    // Assert
    expect(newJobs).toHaveLength(3);

  })
  it('should return an array with the filtered jobs by description and location', () => {
    // Arrenge 
    const filters = {
      description: "Developer",
      location: "Remote in US",
      fullTime: false
    };

    // Act
    const newJobs = getJobsFilteredAction(filters, jobs);

    // Assert
    expect(newJobs).toHaveLength(0);

  })
  it('should return an array with the filtered jobs by description and full time', () => {
    // Arrenge 
    const filters = {
      description: "Software",
      location: "",
      fullTime: true
    };

    // Act
    const newJobs = getJobsFilteredAction(filters, jobs);

    // Assert
    expect(newJobs).toHaveLength(1);

  })
  it('should return an array with the filtered jobs by all inputs', () => {
    // Arrenge 
    const filters = {
      description: "Frontend",
      location: "Hamburg",
      fullTime: true
    };

    // Act
    const newJobs = getJobsFilteredAction(filters, jobs);

    // Assert
    expect(newJobs).toHaveLength(1);

  })
})
