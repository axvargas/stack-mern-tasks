import React, {useState} from 'react';
import { Typography, AppBar, Toolbar, IconButton, Grid, Paper, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from './style.js';

import Form from '../components/form';
import TaskManager from '../components/taskManager';
export default () => {
    const classes = style();//declaro classes con style() y material ui hace la magia

    const [data, setData] = useState([]);

    const fetchTasks =  () => {
        console.log('me ejecutaron');
        fetch('/api/tasks')
        .then(res => res.json())
        .then(dat => {
            setData(dat);
        });
    }

    return (

        <Container maxWidth="xl" className={classes.root}>
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
            <Container maxWidth="xl" className={classes.principalGrid}>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Form fetchTasks={fetchTasks} data={data}/>
                    </Grid>
                    <Grid item xs={7}>
                        <TaskManager fetchTasks={fetchTasks} data={data}/>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}