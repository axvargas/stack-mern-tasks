import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import UpdateIcon from '@material-ui/icons/Update';

import style from './style.js';
import { useSnackbar } from 'notistack';


export default ({ fetchTasks, data, editable, setEditable }) => {
    const classes = style();
    const { enqueueSnackbar } = useSnackbar();


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editable._id) {
            setTitle(editable.title)
            setDescription(editable.description)
        }
    }, [editable]);

    const handleAddTask = (event) => {
        event.preventDefault();
        console.log("New Task: " + title);
        console.log("Description: " + description);

        if (editable._id) {
            fetch(`/api/tasks/${editable._id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(dat => {
                    console.log(dat);
                    enqueueSnackbar('Task updated!', { variant: 'success', autoHideDuration: 3000 });
                    setEditable({});
                    fetchTasks();
                    setTitle('');
                    setDescription('');
                });
        } else {
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(dat => {
                    console.log(dat);
                    enqueueSnackbar('Task saved!', { variant: 'success', autoHideDuration: 3000 });
                    setTitle('');
                    setDescription('');

                })
                .catch(error => console.log(error));
            fetchTasks();
        }
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
            {editable._id ?

                <Grid container justify="center">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<UpdateIcon />}
                    >
                        Update
                    </Button>
                </Grid>
                :
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


            }


        </form>
    );
}

