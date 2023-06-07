import React, {useState} from "react";
import {
  MenuItem,
  Select,
  TextField,
  InputLabel 
} from "@mui/material";
import './style.scss'

const InputField = (props) => {
    const {
        name,
        type,
        label,
        onChange,
        value,
        multiline,
        rows,
        onKeyPress,
        onBlur,
        error,
        placeholder,
        options
    } = props;
    return (
      <TextField
          id="outlined-select-currency"
          select
          label={label}
          fullWidth
          // value={currency}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Example1</MenuItem>
          <MenuItem value={20}>Example2</MenuItem>
          <MenuItem value={30}>Example3</MenuItem>
      </TextField>
    )
}

export default InputField;
