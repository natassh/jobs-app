import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import  * as useContextModule from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import {jobsFixture as jobs} from "../../contexts/helpers/fixtures/jobsFixtureData"
import  JobList  from './JobList';

describe('Jobs', () => {
    const history = createMemoryHistory();
    const mockSetPage = jest.fn();
    const contextData = {
        currentPage : 2,
        setPage: mockSetPage,
        hasMorejobs: true,
        jobsFiltered: jobs,
        getJobsPaged: jest.fn()
    };

    beforeEach(() => {
        const mockUseContext = jest.spyOn(useContextModule, 'useContext');  // spy on otherFn
        mockUseContext.mockImplementation(() => contextData); 
    })

    test('should return an array with jobs', () => {

        const { getAllByLabelText, getByText } = render(<Router history={history}><JobList /></Router>)
        const items = getAllByLabelText("libjob")
      
        userEvent.click(getByText('Load More'));

        // Assert
        expect(items.length).toBe(4)
    });

    test('should have 3 pages', () => {

        const { getByText } = render(<Router history={history}><JobList /></Router>)
      
        userEvent.click(getByText('Load More'));

        // Assert
        expect(mockSetPage).toHaveBeenCalledWith(3)
    });
    test('should the setPage function be called', () => {

        const { getByText } = render(<Router history={history}><JobList /></Router>)
      
        userEvent.click(getByText('Load More'));

        // Assert
        expect(mockSetPage).toHaveBeenCalled()
    });

})