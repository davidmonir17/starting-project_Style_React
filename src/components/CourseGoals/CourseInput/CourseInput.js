import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import stylels from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValied, SETisValied]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0)
    {
      SETisValied(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    {
      SETisValied(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
//`form-control ${!isValied? 'invalid':'' }`
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${stylels['form-control'] } ${!isValied && stylels.invalid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
