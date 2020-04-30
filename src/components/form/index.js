import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';

import style from './style.js';
import { useSnackbar } from 'notistack';


export default () => {
    const classes = style();
    const { enqueueSnackbar } = useSnackbar();


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleAddTask = (event) => {
        event.preventDefault();
        console.log("New Task: " + title);
        console.log("Description: " + description);

        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                enqueueSnackbar('This is a success message!', { variant: 'success', autoHideDuration: 5000 });
                setTitle('');
                setDescription('');

            })
            .catch(error => console.log(error));
    }


    const handleTaskChange = (event) => {
        setTitle(event.target.value);
        console.log(title);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        console.log(description);
    }

    return (

        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleAddTask}>
            <Grid container justify="center">
                <TextField
                    className={classes.textFieldName}
                    required
                    id="outlined-required"
                    label="Task"
                    onChange={handleTaskChange}
                    variant="outlined"
                    value={title}

                />
            </Grid>
            <Grid container justify="center" >
                <TextField
                    className={classes.multiLined}
                    id="outlined-multiline-required"
                    label="Description"
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={handleDescriptionChange}
                    value={description}


                />
            </Grid>
            <Grid container justify="center">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </Grid>

        </form>
    );
}

