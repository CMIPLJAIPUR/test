import React, {useState} from "react";
import {TextField} from "@mui/material";
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AdjustIcon from '@mui/icons-material/Adjust';
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
        placeholder
    } = props;
    return (
        <TextField
            name={name}
            label={label}
            error={!!error}
            variant="outlined"
            type={type}
            helperText={!!error && ( label ? `Enter a ${label}` : placeholder)}
            value={value}
            rows={rows}
            multiline={multiline}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            onKeyPress={onKeyPress}
            onBlur={(e) => onBlur(e.target.name) }
            fullWidth
            placeholder = {placeholder}
            InputProps={{
                endAdornment: value?.length > 0 ? 
                    <InputAdornment position="end"><CheckCircleOutlineIcon/></InputAdornment> :
                    <InputAdornment position="end"><AdjustIcon/></InputAdornment>

            }}
        />
    )
}

export default InputField;
