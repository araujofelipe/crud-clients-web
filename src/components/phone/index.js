import React, {useState} from 'react'
import { Select, MenuItem, InputLabel, TextField } from '@material-ui/core';


export default function Phone({setClientPhone}) {
    const [phone, setPhone ] = useState({type: '', number: ''});

    const handleChange = (event) => {
        setPhone({...phone, type: event.target.value})
        setClientPhone({...phone, type: event.target.value})
    }
    return (
        <div>
            <div>Telefone(s)</div>
            <br />
            <InputLabel id="type-phone-label">Tipo</InputLabel>
            <Select autoWidth value={phone?.type || ''} labelId="type-phone-label" id="type-phone" 
            onChange={handleChange}>
                <MenuItem value="Residencial">Residencial</MenuItem>
                <MenuItem value="Celular">Celular</MenuItem>
                <MenuItem value="Comercial">Comercial</MenuItem>
            </Select>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="number"
                label="Número"
                name="number"
                onChange={(event) => {
                    setPhone({...phone, number: event.target.value })
                    setClientPhone({...phone, number: event.target.value })
                }}
                value={phone.number || ''}
            />
        </div>
    )
}