import React, { useState } from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'

export const Input = ({label, id, type, placeholder, isFormText, formText, pattern, regex}) => {

  const [isValid, setIsValid] = useState(false);


  const FormText = () => {
    if(isFormText){
      return (
        <div className="form-text">
          <span className="px-2">{isValid ? <AiFillCheckCircle/> : <ImCross/>}</span>
          {formText}
        </div>
      )
    }

    return;
  }

  const handleChange = (e) => {

    if(regex){
      if(regex.test(e.target.value)){
        setIsValid(true);
      } else{
        setIsValid(false);
      }
    }
    
    
    
  }

  return (
    <div className="form-floating mb-5">
        <input
          className="form-control" 
          id={id} 
          type={type} 
          name={id} 
          placeholder={placeholder} 
          pattern={pattern} 
          onChange={handleChange} 
          required
        />

        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <FormText/>
    </div>
  )
}
