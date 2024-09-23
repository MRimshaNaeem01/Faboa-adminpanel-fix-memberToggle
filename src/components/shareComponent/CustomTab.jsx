import React from "react";
import { Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";

// Styled components for custom Tabs
const CustomTabs = styled(Tabs)({
  border: "1px solid #d9d9d9", // Border around the entire tabs component
  borderRadius: "8px",
  overflow: "hidden",
  minHeight: "36px", // Adjust height
  marginRight: "10px",
  padding:"4px"
});
const CustomTab = styled(Tab)(({ selected }) => ({
  textTransform: "none", // Keep the text as it is, without uppercasing
  fontWeight: 500,
  fontSize: "14px",
  color: selected ? "#C1963B !important" : "#777B74 !important", // Dark green for selected, grey for others
  backgroundColor: selected ? "#fdf3e4 !important" : "#fff !important", // Light beige for selected, white for others
  minHeight: "36px",
  borderRadius:"8px",
  textTransform: "capitalize!important",
  padding: "6px 12px",
  "&:hover": {
    backgroundColor: "#f7f7f7", // Slight hover effect for non-selected tabs
  },
}));
export const StatusTabs = ({ statusValue, onHandleChange, tabOptions }) => {
  return (
    <CustomTabs
      value={statusValue}
      onChange={onHandleChange}
      variant="scrollable"
      scrollButtons="auto"
      indicatorColor=""
    >
      <CustomTab label="All" value={0} selected={statusValue === 0} />

      {tabOptions.map((item, index) => (
        <CustomTab
          key={index}
          label={item?.label}
          value={item?.value}
          selected={statusValue === item?.value}
        />
      ))}
    </CustomTabs>
  );
};
