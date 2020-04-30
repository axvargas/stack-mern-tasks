import React, { useState } from 'react';
import { Typography, AppBar, Toolbar, IconButton, Grid, Paper, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from './style.js';

import Form from '../components/form';
import TaskManager from '../components/taskManager';
export default () => {
    const classes = style();//declaro classes con style() y material ui hace la magia

    const [data, setData] = useState([]);
    const [editable, setEditable] = useState({});

    const fetchTasks = () => {
        console.log('me ejecutaron');
        fetch('/api/tasks')
            .then(res => res.json())
            .then(dat => {
                setData(dat);
            });
    }

    const handleEditTask = (id) => {
        console.log("Editing" + id);
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(dat => {
                console.log('%c DAT', 'color: orange;')
                console.log(dat);

                setEditable(dat);
                
            })

    };

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
                        <Form fetchTasks={fetchTasks} data={data} editable={editable} setEditable={setEditable} />
                    </Grid>
                    <Grid item xs={7}>
                        <TaskManager fetchTasks={fetchTasks} data={data} editable={editable}  handleEditTask={handleEditTask} />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}