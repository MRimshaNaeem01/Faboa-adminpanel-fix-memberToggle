import React from "react";
import { MenuItem, Select, colors, styled } from "@mui/material"; // For custom styling

/**
 * Reusable Dropdown Component with status indicators
 *
 * @param {Object} props - Component properties
 * @param {string} [props.size="md"] - Size of the dropdown: "lg", "sm", "md" (default)
 * @param {Array} props.options - Array of option objects { value: string, label: string, color: string }
 * @param {function} props.onChange - Function to handle the change event
 * @param {string} props.value - Current selected value
 * @param {string} props.placeholder - Placeholder text for the dropdown
 * @returns JSX.Element
 */
const Dropdown = ({
  options = [],
  onChange,
  value,
  placeholder = "Select an option",
}) => {
  const Dot = styled("span")({
    height: "8px",
    width: "8px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "8px",
  });
  const Status = styled("span")({
    display: "inline-block",
    color: 'red',
    fontSize: '12px',
    fontWeight: '500',
    color: '#5A5C57'
  })
  return (
    <Select
      className="btn"
      value={value}
      onChange={onChange}
      IconComponent={() => null}
      renderValue={(selected) => {
        if (selected === "") {
          return <em>{placeholder}</em>;
        }
        const selectedItem = options.find(
          (option) => option?.value === selected
        );
        return (
          <>
            <Dot style={{ backgroundColor: selectedItem?.color }} />
            <Status> {selectedItem?.label} </Status>
          </>
        );
      }}
      sx={{
        border: "1px solid #BFC2BD",
        borderRadius: "6px",
        height: "22px",
        width: "77%",
        "&:hover": { 
          border: "1px solid #BFC2BD",
          pointer: "cursor"
        },
        ".MuiSelect-select": {
          padding: "0px !important",
          fontSize: "14px",
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        color: "#777b74",
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            textAlign: "center",
            fontSize: "12px",
            backgroundColor: "white !important",
            width: "130px",
            color: "#777b74",
            "& .MuiMenuItem-root": {
              padding: "10px",
            },

          },
        },
      }}
    >
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {options.map((option, index) => (
        <MenuItem key={index} value={option?.value}>
          <Dot style={{ backgroundColor: option?.color }} /> {option?.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
