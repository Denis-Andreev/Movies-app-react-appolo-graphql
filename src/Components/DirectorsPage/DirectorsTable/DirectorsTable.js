import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import classes from './directorsPage.module.css';
import {TableItem} from "./TableItem/TableItem";

let DirectorsTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Movies</TableCell>
                        <TableCell align="center">Menu</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.directors.map((director) => (
                        <TableItem refetch={props.refetch}  director={director}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DirectorsTable;