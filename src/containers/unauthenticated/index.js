import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";



import api from '../../api/auth'
import * as utils from '../../storage/utils'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const classes = useStyles();
  const [userAuth, setUserAuth] = useState({})
  const history = useHistory()

  const submit = () => {
    api.login(userAuth).then(data => {
      utils.register('token', data.data)
      window.location.reload(false);
    });
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entre com suas credencias
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Nome de Usuário"
            name="login"
            autoFocus
            onChange={(event) => {
              setUserAuth({...userAuth, login : event.target.value })
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => {
              setUserAuth({...userAuth, password: event.target.value})
            }}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => submit()}
            className={classes.submit}
          >
            Entrar
          </Button>
        </form>
      </div>
    </Container>
  );
}