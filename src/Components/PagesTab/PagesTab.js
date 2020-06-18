import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Person, Visibility} from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import MoviesPage from "../MoviesPage/MoviesPage";
import DirectorsPage from "../DirectorsPage/DirectorsPage";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const PagesTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab icon={<Visibility />} label="Movies Page" />
                    <Tab icon={<Person />} label="Directors Page"/>
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis="x"
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <MoviesPage />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DirectorsPage />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

const TabPanel = (props) => {
    const {children, value, index} = props;
    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default PagesTab;