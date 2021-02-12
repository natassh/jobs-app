import React, { useState, useContext } from 'react';
// import Input from '../../../../components/Input';
// import { TaskContext } from '../../contexts/TaskContext';

import './JobsForm.css';

const JobsForm: React.FC = () => {
  const [descriptionValue, setDescriptionValue] = useState<string>("")
  const [locationValue, setLocationValue] = useState<string>("")
  const [fullTimeValue, setFullTimeValue] = useState<boolean>(false)
  console.log('descriptionValue: ', descriptionValue)
  console.log('locationValue: ', locationValue)
  console.log('fullTimeValue: ', fullTimeValue)


  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const inputNewValue = e.target.value;
    setDescriptionValue(inputNewValue)
  };
  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const inputNewValue = e.target.value;
    setLocationValue(inputNewValue);
  };
  const handleChangeFullTime = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setFullTimeValue(!fullTimeValue)
  };


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
          value={descriptionValue}
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
          value={locationValue}
          onChange={handleChangeLocation}
        />
      </div>

      <div>
        <input 
          type="checkbox" 
          id="fullTime"
          // checked={task.checked}
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

// const [valueInput, setValueInput] = useState<string>('');
// const { addTaskToList } = useContext(TaskContext);

// const handleWhenValueInputChange = (inputNewValue:string) => {
//   setValueInput(inputNewValue);
// };

// <Input
// title="Create a new todo"
// onChange={handleWhenValueInputChange} 
// className="AddTaskForm__Input"
// type="text"
// value={valueInput}
// placeholder = "Create a new todo..."
// />


// import React from 'react';
// import './Input.css';

// const Input: React.FC<InputProps> = ({ onChange, title, className, type, value, placeholder }) => {

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
//     const inputNewValue = e.target.value;
//     onChange(inputNewValue);
//   };

//   return (
//     <input
//       title={title} 
//       className={className} 
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={handleChange}
//     />
//   );
// };

// export default Input;


// type InputProps = {
//   title: string,
//   className: string,
//   type: string,
//   value?: string,
//   placeholder?: string,
//   onChange: (value: string) => void
// }


