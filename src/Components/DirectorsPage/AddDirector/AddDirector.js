import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import MenuItem from "@material-ui/core/MenuItem";
import {Build} from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {useMutation} from "@apollo/react-hooks";
import {ADD_DIRECTOR} from "../../../API/mutations/directors_mutations";

export const AddDirector = ({director, refetch}) => {
    const [open, setOpen] = React.useState(false);
    const [addDirector, {data}] = useMutation(ADD_DIRECTOR);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputs = event.target;
        const name = inputs[0].value;
        const age = +inputs[1].value;
        if(name && age) {
            debugger;
            addDirector({variables: {name, age}})
            refetch();
        }
    }
    return (
        <div>
            <Fab color="primary" onClick={handleClickOpen}>
                <AddIcon/>
            </Fab>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Add Director</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="age"
                            label="Age"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary" type="submit">
                            Add
                        </Button>
                    </DialogActions>
                    </form>
                </Dialog>
        </div>
    )
}