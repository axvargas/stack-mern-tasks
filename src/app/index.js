import React from 'react';
import {render} from 'react-dom';
import {SnackbarProvider} from 'notistack';
import App from './App';

render(<SnackbarProvider maxSnack={3}><App/></SnackbarProvider>, document.getElementById('app'));