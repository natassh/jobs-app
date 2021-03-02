import Job from "./Job"
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Job', () => {

  test('should returns a default image if it does not have the field companyLogo', () => {

      // Arrenge
      const history = createMemoryHistory();
      const props = { 
        id: "b1b4983c-9aba-4fa0-a6a2-8367be2ec30b", 
        createdAlt: "Thu Feb 18 10:02:01 UTC 2021", 
        type: "Full Time", 
        title: "NodeJS Service Developer (m/w/d)", 
        company: "https://www.enote.com/", 
        companyLogo: null, 
        location: "Berlin"
      }

      render( <Router history={history}><Job {...props} /></Router>)

      const defaultImage = screen.getByAltText("Imagen de un logo por defecto")

      // Assert
      expect(defaultImage).toBeInTheDocument();
  });

  test('should returns an image of the company', () => {

    // Arrenge
    const history = createMemoryHistory();
    const props = { 
      id: "b1b4983c-9aba-4fa0-a6a2-8367be2ec30b", 
      createdAlt: "Thu Feb 18 10:02:01 UTC 2021", 
      type: "Full Time", 
      title: "NodeJS Service Developer (m/w/d)", 
      company: "https://www.enote.com/", 
      companyLogo: 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGVaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eab17839ce167dccb20fd19c9429de91875bb7b5/enote%20GmbH.png', 
      location: "Berlin"
    }

    render( <Router history={history}><Job {...props} /></Router>)

    const companyImage = screen.getByAltText("https://www.enote.com/")

    // Assert
    expect(companyImage).toBeInTheDocument();
  });

})