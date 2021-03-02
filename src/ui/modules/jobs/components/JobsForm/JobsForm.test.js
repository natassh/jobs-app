import JobsForm from "./JobsForm";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import  * as useContextModule from 'react';
import {jobsFixture} from "../../contexts/helpers/fixtures/jobsFixtureData"

describe('JobsForm', () => {
  const filtersFixture = {
    description: "Developer",
    location: "",
    fullTime: false
  };
  const mockGetJobsFiltered = jest.fn();
  const contextData = {
    getJobsFiltered: mockGetJobsFiltered,
    jobs: jobsFixture,
    filters: filtersFixture
  };
  beforeEach(() => {
    const mockUseContext = jest.spyOn(useContextModule, 'useContext');  // spy on otherFn
    mockUseContext.mockImplementation(() => contextData); 
  })

  test('should call the function getJobsFiltered', () => {
    // Act
    render(<JobsForm />);
    const buttonFilter = screen.getByText("Filter");
    userEvent.click(buttonFilter);

    // Assert
    expect(mockGetJobsFiltered).toHaveBeenCalled()
  });
})
