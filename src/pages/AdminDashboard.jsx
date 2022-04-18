import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

import ItemRequest from "../components/ItemRequest";
import { Stack, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import OrdersPanel from "../components/OrdersPanel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3, padding: 0 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabs = styled(Tabs)({
  width: "400px",
  borderRadius: "10px",

  "& .MuiTabs-indicator": { display: "none" },
});

const AdminDashboard = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack sx={{ width: "100%", position: "relative" }}>
      <CustomTabs value={value} onChange={handleTabChange} component={"div"}>
        <Tab
          label="Items"
          {...a11yProps(0)}
          style={{
            width: "50%",
            padding: "10px 40px",
            textTransform: "none",
            backgroundColor: value === 0 ? theme.palette.primary.main : theme.palette.primary.contrastText,
            color: value === 0 ? theme.palette.common.white : theme.palette.secondary.main,
          }}></Tab>
        <Tab
          label="Orders"
          {...a11yProps(1)}
          style={{
            width: "50%",
            padding: "10px 40px",
            textTransform: "none",
            backgroundColor: value === 1 ? theme.palette.primary.main : theme.palette.primary.contrastText,
            color: value === 1 ? theme.palette.common.white : theme.palette.secondary.main,
          }}></Tab>
      </CustomTabs>
      <Box sx={{ height: "100%" }}>
        <TabPanel value={value} index={0} component={"div"}>
          <Box sx={{ height: "80vh" }}>
            <ItemRequest />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} component={"div"}>
          <Box sx={{ height: "80vh" }}>
            <OrdersPanel />
          </Box>
        </TabPanel>
      </Box>
    </Stack>
  );
};

export default AdminDashboard;
