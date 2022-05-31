import "./profileTab.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import { useState, useEffect } from "react";
import { Postcard } from "../index";
import { useSelector } from "react-redux";

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

const useStyles = makeStyles({
  root: {
    maxWidth: "fit-content",
    backgroundColor: "transparent",
    color: 'black',
  },
  labeltext: {
    color: "#818cf8",
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: `'Poppins', sans-serif`,
  },
  tab: {
    fontFamily: `'Poppins', sans-serif`,
  },
  tabpanel: {
    width: "100%",
  }
});

export const ProfileTab = ({ userDetails }) => {
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
  }
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const { allPosts, bookmark } = useSelector((state) => state.post);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabpanel}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab className={classes.labeltext} label="POSTS" {...a11yProps(0)} />
        <Tab className={classes.labeltext} label="SAVED" {...a11yProps(1)} />
        <Tab className={classes.labeltext} label="LIKED" {...a11yProps(2)} />
      </Tabs>
      <TabPanel className={classes.tab} value={value} index={0}>
        {
          [...allPosts.filter((ele) => ele.username === userDetails.username)]?.map((post) => (
            <Postcard key={post.id} post={post} />
          ))
        }
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={1}>
        {bookmark?.map((posts) => (
          <Postcard key={posts._id} post={posts} />
        ))}
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={2}>
        {[...allPosts.filter((post) => post.likes.likedBy.some((ele) => ele.username === userDetails.username))]
          ?.map((posts) => (
            <Postcard key={posts._id} post={posts} />
          ))}
      </TabPanel>
    </div>
  )
}