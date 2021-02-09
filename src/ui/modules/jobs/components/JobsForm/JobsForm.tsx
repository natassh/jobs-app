import React, { useState, useContext } from 'react';
// import Input from '../../../../components/Input';
// import { TaskContext } from '../../contexts/TaskContext';

import './JobsForm.css';

const JobsForm: React.FC = () => {
  // const [valueInput, setValueInput] = useState<string>('');
  // const { addTaskToList } = useContext(TaskContext);

  // const handleWhenValueInputChange = (inputNewValue:string) => {
  //   setValueInput(inputNewValue);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   addTaskToList(valueInput);
  //   setValueInput('');
  // };

  return (
    <form className="JobsForm" /*onSubmit={handleSubmit}*/>
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
          // value={valueInput}
          // onChange={handleChange}
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
          // value={valueInput}
          // onChange={handleChange}
        />
      </div>

      <div>
        <input 
          type="checkbox" 
          id="fullTime"
          // checked={task.checked}
          // onChange={() => {
          //   handleChangeToCompletedTask(task)
          // }}
        />
        <label 
          htmlFor="fullTime"
          className = "fullTime"
        >
          Full Time Only
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
