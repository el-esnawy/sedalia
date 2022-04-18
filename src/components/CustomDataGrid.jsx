import React from "react";
import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";

const MyDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": {
    background: theme.palette.primary.main,
    color: "white",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
    fontSize: "16px",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: theme.palette.customBackgroundColor,
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "lightblue",
  },
}));

const CustomDataGrid = ({
  columns,
  rowData,
  currentPage,
  pageSize,
  rowHeight,
  NoDataText,
  NoResultText,
  sx,
  onRowClick,
  error,
  loading,
}) => {
  const theme = useTheme();

  return (
    <MyDataGrid
      columns={columns}
      rows={rowData?.length === 0 || !rowData ? [] : rowData}
      loading={loading}
      page={currentPage - 1}
      pageSize={pageSize}
      rowHeight={rowHeight}
      hideFooterPagination
      disableExtendRowFullWidth
      disableSelectionOnClick
      disableColumnFilter
      // disableColumnMenu
      hideFooterSelectedRowCount
      hideFooter
      sx={{ ...sx }}
      onRowClick={onRowClick}
      components={{
        NoRowsOverlay: () => (
          <Stack height="100%" alignItems="center" justifyContent="center">
            <Typography variant="h4" sx={{ fontSize: "24px", color: error ? "red" : theme.palette.primary.main }}>
              {NoDataText}
            </Typography>
          </Stack>
        ),
        NoResultsOverlay: () => (
          <Stack height="100%" alignItems="center" justifyContent="center">
            <Typography variant="h4" sx={{ fontSize: "24px", color: theme.palette.primary.main }}>
              {NoResultText}
            </Typography>
          </Stack>
        ),
      }}
    />
  );
};

export default CustomDataGrid;
