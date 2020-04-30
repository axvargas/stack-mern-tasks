import React from 'react';
import { Typography, AppBar, Toolbar, IconButton, Grid, Paper, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from './style.js';

import Form from '../components/form';
export default () => {
    const classes = style();//declaro classes con style() y material ui hace la magia

    return (

        <Container className={classes.root}>
            {/* NAVIGATION BAR */}
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        &copy; Mattu<strong>App</strong>
                    </Typography>
                </Toolbar>
            </AppBar>

            {/*  */}
            <Container className={classes.principalGrid}>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Form />
                    </Grid>
                    <Grid item xs={7}>
                        <Paper className={classes.paper}>xs 7</Paper>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}