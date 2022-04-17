import SendIcon from "@mui/icons-material/Send";
import { Button, Typography } from "@mui/material";
import React from "react";

const SubmitButton = ({ children, form }) => {
  return (
    <Button variant="contained" sx={{ px: 5, py: 1, borderRadius: 5 }} endIcon={<SendIcon />} form={form} type="submit">
      <Typography variant="h6" sx={{ fontWeight: "bold", mx: 2 }}>
        {children}
      </Typography>
    </Button>
  );
};

export default SubmitButton;
