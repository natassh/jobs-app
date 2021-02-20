import React, { useState, useContext } from 'react';
import { JobContext, FilterType } from '../../contexts/JobContext';

import './JobsForm.css';

const JobsForm: React.FC = () => {

  const { filters, setFilters } = useContext(JobContext);
  const [filtersForm, setFiltersForm] = useState<FilterType>( filters)

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const descriptionValue = e.target.value;
    setFiltersForm({
      ...filtersForm,
      description: descriptionValue
    })
  };
  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const locationValue = e.target.value;
    setFiltersForm({
      ...filtersForm,
      location: locationValue
    })
  };
  const handleChangeFullTime = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setFiltersForm({
      ...filtersForm,
      fullTime: !filtersForm.fullTime
    })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('filtersForm', filtersForm)
    setFilters(filtersForm);
  };

  return (
    <form className="JobsForm" onSubmit={handleSubmit}>
      <div>
        <label 
          htmlFor="description"
          className = "description"
        >
        </label>
        <input 
          type="text" 
          id="description"
          title="description"
          className="JobsForm__description"
          placeholder="Filter by title, companies, expertise…"
          defaultValue={filters.description}
          onChange={handleChangeDescription}
        />
      </div>

      <div>
        <label 
          htmlFor="location"
          className = "location"
        >
        </label>
        <input 
          type="text" 
          id="location"
          title="location"
          className="JobsForm__location"
          placeholder="Filter by location…"
          defaultValue={filters.location}
          onChange={handleChangeLocation}
        />
      </div>

      <div>
        <input 
          type="checkbox" 
          id="fullTime"
          defaultChecked={filters.fullTime}
          onChange={handleChangeFullTime}
        />
        <label 
          htmlFor="fullTime"
          className = "fullTime"
        >
          Full Time <span>Only</span>
        </label>
        <input
          type="submit" 
          value="Search" 
          className="JobsForm__submit" 
        />
      </div>
    </form>
  );
};

export default JobsForm;



