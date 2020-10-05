import React, { useEffect, useState } from 'react'

import api from '../../api/client'
import { makeStyles } from '@material-ui/core/styles';

import { 
    Paper, TableContainer, Table, TableHead, TableCell, TableRow, TableBody} from '@material-ui/core';
export default function ListClient() {
    const [clients, setClients] = useState([])
    useEffect(() => {
        api.fetchAll().then(result => setClients(result.data))
    }, [])
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">CPF</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Endereço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {client.cpf}
              </TableCell>
              <TableCell align="right">{client.emails[0].account}</TableCell>
              <TableCell align="right">{client.phones[0].number}</TableCell>
              <TableCell align="right">{`${client.address.publicPlace}, ${client.address.neighborhood} - ${client.address.state}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}