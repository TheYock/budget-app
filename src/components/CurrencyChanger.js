import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyChanger = () => {
    const{currency, dispatch} = useContext(AppContext);

    const handleChange = (e) => {
        const selectedCurrency = e.target.value;
        dispatch({type: 'CHG_CURRENCY', payload: selectedCurrency});
    };
    return (
<div className='alert alert-primary'>
<span>Select Currency:</span>
<select value ={currency} onChange={handleChange}>
  <option value='$'>$ Dollar</option>
  <option value='£'>£ Pound</option>
  <option value='€'>€ Euro</option>
  <option value='₹'>₹ Rupee</option>
  </select>
</div>
    );
};
export default CurrencyChanger;