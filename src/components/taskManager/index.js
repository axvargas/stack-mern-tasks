import React, { useEffect } from 'react';
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useSnackbar } from 'notistack';

import style from './style.js';

export default ({ fetchTasks, data, editable, handleEditTask }) => {
    const classes = style();

    const { enqueueSnackbar } = useSnackbar();


    useEffect(() => {
        fetchTasks();
        console.log('The component was mounted')
        console.log('%c TASKS', 'color: orange;')
        console.log(data);
    }, [data.length]);

    const handleDeleteTask = (id) => {
        if (confirm('Are you sure you want to delete the task?')) {
            console.log("Deleting" + id);

            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(dat => {
                    console.log(dat);
                    enqueueSnackbar('Task deleted!', { autoHideDuration: 3000 });
                    fetchTasks();

                });
        }
    };

    

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left"><strong>Title</strong></TableCell>
                        <TableCell align="left"><strong>Description</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((task, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell align="left">{task.title}</TableCell>
                                    <TableCell align="left">{task.description}</TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.buttonEdit}
                                            startIcon={<EditIcon />}
                                            onClick={() => handleEditTask(task._id)}
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.buttonDelete}
                                            startIcon={<DeleteIcon />}
                                            onClick={() => handleDeleteTask(task._id)}

                                        >
                                            Delete
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            )
                        })

                    }
                </TableBody>
            </Table>
        </TableContainer>

    );
}
