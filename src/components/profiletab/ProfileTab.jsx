import "./profileTab.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import { useState } from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor:"transparent",
      fontWeight:"600"
    }
  }));

export const ProfileTab = () => {
    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            "aria-controls": `scrollable-auto-tabpanel-${index}`
        };
    }
      function handleChange(event, newValue) {
    setValue(newValue);
  }
    const classes = useStyles();
    const [value, setValue] = useState(0);
    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="POSTS" {...a11yProps(0)} />
                <Tab label="BOOKMARKS" {...a11yProps(1)} />
                <Tab label="LIKED" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
        </div>
    )
}