import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import classes from '../directorsPage.module.css'
import {TableItemMenu} from "./TableItemMenu/TableItemMenu";

export const TableItem = ({director, refetch}) => {
    const movies = director.movies.map((movie) => {
       return (
           <ul>
               <li><span className={classes.tableItem_title}>Movie:</span>&nbsp;{movie.name}</li>
               <li><span className={classes.tableItem_title}>Genre:</span>&nbsp;{movie.genre}</li>
               <li><span className={classes.tableItem_title}>Rate:</span>&nbsp;{movie.rate}</li>
           </ul>
       )
    });
    return (
        <TableRow key={director.id}>
            <TableCell component="th" scope="row" align="center">
                {director.name}
            </TableCell>
            <TableCell align="center">{director.age}</TableCell>
            <TableCell align="center">{movies}</TableCell>
            <TableCell align="center"><TableItemMenu refetch={refetch} director={director}/></TableCell>
        </TableRow>
    )
}