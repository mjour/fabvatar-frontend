import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Profile_Security from "./Profile_Security";
import Security_tab from "./Security_tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: "5px",
  },
  // profile_tab: {
  //   "&:focus": {
  //     background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
  //     WebkitBackgroundClip: "text",
  //     WebkitTextFillColor: "transparent",
  //     textFillColor: "transparent",
  //   },
  // },
  tabs: {
    "& .MuiTab-root.Mui-selected": {
      background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textFillColor: "transparent",
    },
  },
  tab_class: {
    borderBottom: "0.5px solid grey",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tab_class}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.tabs}
          TabIndicatorProps={{
            style: {
              background:
                "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
            },
          }}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Security" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Profile_Security />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Security_tab />
      </TabPanel>
    </div>
  );
}
