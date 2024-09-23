import { Switch } from "@mui/material";
import { useState } from "react";
export const ToggleComponent = ({ onChange, status, defaultValue, value }) => {
  const [data, setData] = useState(status)

  console.log({ data });

  return (
    <Switch
      style={{ height: '10px', margin: '11px 0px 10px 2px' }}
      onChange={(e) => onChange(e?.target?.checked)} // Call onChange with the updated boolean value
      checked={status}
      sx={{
        height: 40,
        "& .MuiSwitch-switchBase": {
          color: "#FFFFFF",
          "&.Mui-checked": {
            color: "#FFFFFF",
          },
        },
        "& .MuiSwitch-thumb": {
          width: 16,
          height: 16,
        },
        "& .MuiSwitch-track": {
          backgroundColor: "#E6D5B1",
          opacity: 1,
        }
      }}
    />

  );
};
