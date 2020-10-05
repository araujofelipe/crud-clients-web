import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import api from '../../api/address'

export default function Address({setClientAddress}) {
    const [address, setAddress] = useState({})
    const fetchAddress = zipCode => {
        zipCode &&
        api.fetch(zipCode).then(result => {
            setClientAddress({...result.data});
            setAddress({...result.data})
        })
    }

    return (
       <div>
            <div>Endereço</div>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="zipCode"
                label="CEP"
                name="zipCode"
                
                onChange={(event) => {
                    setClientAddress({...address, zipCode : event.target.value })
                    setAddress({...address, zipCode : event.target.value })
                }}
                onBlur={(event) => {fetchAddress(event.target.value)}}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="publicPlace"
                label="Logradouro"
                name="publicPlace"
                onChange={(event) => {
                    setClientAddress({...address, publicPlace : event.target.value })
                    setAddress({...address, publicPlace : event.target.value })
                }}
                value={address.publicPlace || ''}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="complement"
                label="Complemento"
                name="complement"
                onChange={(event) => {
                    setClientAddress({...address, complement : event.target.value })
                    setAddress({...address, complement : event.target.value })
                }}
                value={address.complement || ''}
            />
             <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="neighborhood"
                label="Bairro"
                name="neighborhood"
                onChange={(event) => {
                    setClientAddress({...address, neighborhood : event.target.value })
                    setAddress({...address, neighborhood : event.target.value })
                }}
                value={address.neighborhood || ''}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="state"
                label="UF"
                name="state"
                onChange={(event) => {
                    setClientAddress({...address, state : event.target.value })
                    setAddress({...address, state : event.target.value })
                }}
                value={address.state || ''}
            />
       </div>
    )
}

Address.defaultProps = {
    address: {
        zipCode: '',
        publicPlace: '',
        neighborhood: '',
        state: ''
    },
  }
