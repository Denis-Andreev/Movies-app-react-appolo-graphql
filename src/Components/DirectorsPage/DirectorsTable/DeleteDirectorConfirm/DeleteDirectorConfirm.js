import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Delete} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import {useMutation} from "@apollo/react-hooks";
import {DELETE_DIRECTOR} from "../../../../API/mutations/directors_mutations";

export const DeleteDirectorConfirm = ({setAnchorEl, directorId, refetch}) => {
    const [open, setOpen] = React.useState(false);
    const [deleteDirector, { data }] = useMutation(DELETE_DIRECTOR);
    const handleClickOpen = () => {
        setAnchorEl(null);
        setOpen(true);
    };
    const handleAgree = () => {
        deleteDirector({variables: { id: directorId } });
        refetch();
        handleClose();
    }
    const handleDisagree = () => {
        handleClose();
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MenuItem onClick={handleClickOpen}><Delete />Delete</MenuItem>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title">Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure about this?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDisagree} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleAgree} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}