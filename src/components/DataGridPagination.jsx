import { Pagination } from "@mui/material";
import React from "react";

const DataGridPagination = ({ page, setPage, pageSize, totalRows }) => {
  return (
    <Pagination
      color="secondary"
      sx={{ width: "100%", "& .MuiButtonBase-root": { color: "white", display: "grid", placeItems: "center" } }}
      count={Math.ceil(totalRows / pageSize)}
      variant="outlined"
      shape="rounded"
      page={page}
      hideNextButton
      hidePrevButton
      size="small"
      onChange={(e) => {
        setPage(Number(e.target.innerText));
      }}
    />
  );
};

export default DataGridPagination;
