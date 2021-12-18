
import React, { useState } from 'react';
import PropTypes from 'prop-types'



const AddCategory = ({setcategory}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange=(e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        if (inputValue.trim().length>2) {
        setcategory(category => [inputValue,...category]);
        setinputValue('');}

    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>{inputValue}</h2>
         <input type='text'
         value={inputValue}
         onChange={handleInputChange}
         />
         
        </form>
    )
}

AddCategory.propTypes= {
    setcategory:PropTypes.func.isRequired,
}



export default AddCategory
