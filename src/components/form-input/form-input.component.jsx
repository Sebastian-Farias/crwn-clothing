import React from 'react';

import './form-input.styles.css'

const  FormInput = ({ handleChange, label, ...otherItemProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherItemProps}/>
        {
            label ? (
            <label 
                className={`$
                {otherProps.value.lenght} ? 'shrink': ''} 
                form-input-label`
                }
            >
                {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput