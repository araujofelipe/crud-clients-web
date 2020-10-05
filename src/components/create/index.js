
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { 
    Button, 
    Container, 
    TextField} from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Address from '../../components/address'
import Phone from '../../components/phone'
import api from '../../api/client'

export default function CreateClient({props}) {
    const [client, setClient] = useState({})
    const history = useHistory()


    const setClientAddress = (address) => {
        setClient({...client, address : address})
    }

    const setClientPhone = (phone) => {
        setClient({...client, phones: [phone]})
    }

    const save = () => {
        api.create(client).then(result => 
            history.push("/list")
        );
    }

    return (
        <>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    name="nome"
                    autoFocus
                    onChange={(event) => {
                        setClient({...client, name : event.target.value })
                    }}
                />
                 <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    onChange={(event) => {
                        setClient({...client, emails : [{account: event.target.value}] })
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cpf"
                    label="CPF"
                    name="cpf"
                    onChange={(event) => {
                        setClient({...client, cpf : event.target.value })
                    }}
                />
                <Address setClientAddress={setClientAddress} />
                <Phone setClientPhone={setClientPhone} />
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {save()}}
                >
                    Salvar
                </Button>
            </form>
        </Container>
        </>
    )

}
