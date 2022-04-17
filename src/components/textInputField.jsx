/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TextInputField = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const newProps = { ...props };

  delete newProps.icon;
  delete newProps.labelStyle;

  const DEFAULT_INPUT_PROPS_STYLE = {
    backgroundColor: theme.palette.fieldBackgroundColor,
    borderRadius: "8px",
    borderLeft: `7px solid ${theme.palette.primary.main}`,
    color: theme.palette.fieldTextColor,
    height: 60,
  };

  const startAdorment = (
    <InputAdornment position="start" variant="standard" sx={{ marginRight: 1 }}>
      {props.icon ? <props.icon width="25px" height="25px" fill={theme.palette.primary.main} color="primary" /> : ""}
    </InputAdornment>
  );

  return (
    <TextField
      ref={ref}
      variant="filled"
      {...props.style}
      {...newProps}
      InputProps={{
        startAdornment: props.icon && startAdorment,
        sx: {
          ...DEFAULT_INPUT_PROPS_STYLE,
          ...props.sx,
        },
      }}
      InputLabelProps={{
        ...props.InputLabelProps,
        sx: {
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginLeft: 5,
          backgroundColor: theme.palette.customBackgroundColor,
          color: theme.palette.primary.main,
          ...props.labelStyle,
        },
      }}
    />
  );
});

export default TextInputField;
