import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        // Convert the input value to a number
        const updatedBudget = parseInt(event.target.value, 10);
        
        // Update the state
        setNewBudget(updatedBudget);
    
        // Dispatch the action to update the global state
        dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
      };
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
