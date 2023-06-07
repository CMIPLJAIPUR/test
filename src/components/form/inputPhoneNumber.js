import React, {useState} from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import "./style.scss"

const InputPhoneNumber = (props) => {
    const {
        name,
        onChange,
        value,
        country,
        error,
        onBlur
    } = props;
    return (
      <div className={`zf-Phone w-100`}>
          <PhoneInput
              country={country || 'us'}
              value={value}
              onChange={(phone) => onChange(name, phone)}
              onBlur={() => onBlur(name)}
              inputClass = {error && 'error'}
          />
          {
              error && 
              <p className="text-danger" style={{fontSize: '12px'}}>
                Enter a phone number so we can call if there any issues with delivery.
              </p>
          }
      </div>
    )
}

export default InputPhoneNumber;
