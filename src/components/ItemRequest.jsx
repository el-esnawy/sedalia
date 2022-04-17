import React, { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CustomDataGrid from "./CustomDataGrid";
import { useDispatch, useSelector } from "react-redux";
import { getItemRequests } from "../store/asyncThunk/requestThunk";
import { Container, Typography } from "@mui/material";
import LoadingOverlay from "./LoadingOverlay";
import DataGridPagination from "./DataGridPagination";
import { useState } from "react";
import { Box } from "@mui/system";

const ItemRequest = () => {
  const pageSize = 11;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { requests, loading } = useSelector((state) => state.items);

  const rowData = requests.map((item) => {
    const {
      brand,
      name,
      pharmacyCompany,
      size,
      pharmacySKU,
      UPC,
      createdAt: created,
      updatedAt: updated,
      isApproved,
      _id: id,
    } = item;

    return {
      brand,
      name,
      pharmacyCompany,
      size,
      pharmacySKU,
      UPC,
      createdAt: new Date(created).toLocaleDateString(),
      updatedAt: new Date(updated).toLocaleDateString(),
      isApproved,
      id,
    };
  });

  const columns = [
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "pharmacyCompany",
      headerName: "Company",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "size",
      headerName: "Size",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "pharmacySKU",
      headerName: "SKU",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "UPC",
      headerName: "UPC",
      flex: 1,
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "createdAt",
      headerName: "Created On",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "updatedAt",
      headerName: "Last Update",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "isApproved",
      headerName: "Approved",
      headerAlign: "center",
      sortable: false,
      renderCell: (cellParams) => {
        const Icon = cellParams.isApproved ? CheckIcon : CloseIcon;
        return (
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Icon color={cellParams.isApproved ? "success" : "error"} />
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getItemRequests());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingOverlay />;
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "766px", display: "flex", justifyContent: "center", flexDirection: "column", gap: 2 }}>
      <Typography variant="h3" textAlign="center" sx={{ fontWeight: "bold", color: "white" }}>
        All Item Requests
      </Typography>
      <CustomDataGrid
        columns={columns}
        rowData={rowData}
        rowHeight={54}
        loading={loading}
        pageSize={pageSize}
        currentPage={page}
        NoDataText={"No Data Found"}
      />
      {rowData.length / pageSize > 1 && (
        <DataGridPagination page={page} setPage={setPage} pageSize={pageSize} totalRows={rowData.length} />
      )}
    </Container>
  );
};

export default ItemRequest;
