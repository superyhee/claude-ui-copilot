import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import * as React from 'react'

 

export default function SimpleSelect(props) {
    const { fullWidth = true, size, style } = props
    return (
        <FormControl
            fullWidth={fullWidth}
            variant="outlined"
            margin="dense"
            className={props.className}
            size={size}
            style={style}
        >
            <InputLabel>{props.label}</InputLabel>
            <Select label={props.label} value={props.value} onChange={(e) => props.onChange(e.target.value as T)}>
                {props.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}