import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {Build, Delete, MoreVert} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import classes from '../../directorsPage.module.css'
import {UpdateDirectorForm} from "../../UpdateDirectorForm/UpdateDirectorForm";
import {DeleteDirectorConfirm} from "../../DeleteDirectorConfirm/DeleteDirectorConfirm";


export const TableItemMenu = ({director, refetch}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose =() => {
        setAnchorEl(null);
    }
    const handleChange = () => {
        setAnchorEl(null);
    };
    const handleDelete = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.tableItem_menu}>
            <Button onClick={handleClick}>
                <MoreVert />
            </Button>
            <Menu className={classes.tableItem_menu} anchorEl={anchorEl} keepMounted open={anchorEl} onClose={handleClose}>
                <UpdateDirectorForm refetch={refetch} setAnchorEl={setAnchorEl} director={director}/>
                <DeleteDirectorConfirm refetch={refetch} setAnchorEl={setAnchorEl} directorId={director.id}/>
            </Menu>
        </div>
    );
}