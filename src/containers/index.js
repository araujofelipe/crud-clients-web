import React, { useEffect,  } from 'react'
import {  BrowserRouter as Router,
  Route, Switch } from 'react-router-dom'
import { Typography, Link } from '@material-ui/core';

import axios from 'axios'
import {getter} from '../storage/utils'


import Unauthenticated from './unauthenticated'
import * as utils from '../storage/utils'

import { makeStyles } from '@material-ui/core/styles';
import CreateClient from '../components/create'
import ListClient from '../components/list'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

export default function Application() {

  useEffect(() => {
    axios.interceptors.request.use(async (config) => {
      console.log(config.url)
      if (!config.url.endsWith('auth')) {
          console.log(getter('token'))
          const userToken = getter('token')
          config.headers.Authorization = `Bearer ${userToken}`;
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    })
  },[utils]);

  const classes = useStyles();
  return (
    
    <Router >
      {utils.getter('token') ? (<>
        <Typography className={classes.root}>
            <Link href="/create">
                Cadastrar Cliente
            </Link>
            <Link href="/list" >
                Listar Clientes
            </Link>
        </Typography>
        <Switch>
          <Route path="/create">
            <CreateClient />
          </Route>
          <Route path="/list">
            <ListClient />
          </Route>
        </Switch>
      </>) : <Unauthenticated />}
    </Router>
  )
}
