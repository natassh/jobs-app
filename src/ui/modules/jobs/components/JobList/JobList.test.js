import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import  * as useContextModule from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import  JobList  from './JobList';
import {jobsFixture as jobs} from "../../contexts/helpers/fixtures/jobsFixtureData"

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

    test(' ', () => {
        // Arrenge
        // const props = { id: 'asdfasdf' } 
        // render(<JobList {...props} />)


        // Act
        // old
        // const { getAllByRole }  = render(<JobList />)

        const { getAllByLabelText, getByText, debug } = render(<Router history={history}><JobList /></Router>)
        // const items = screen.getAllByRole("listitem");
        // debug();
        const items = getAllByLabelText("libjob")
      

         userEvent.click(getByText('Load More'));


        

        // Assert
        expect(items.length).toBe(4)
        expect(mockSetPage).toHaveBeenCalledWith(3)
        expect(mockSetPage).toHaveBeenCalled()
    });


})