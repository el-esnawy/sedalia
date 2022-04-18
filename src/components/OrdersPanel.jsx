import React, { useEffect } from "react";

import CustomDataGrid from "./CustomDataGrid";
import { useDispatch, useSelector } from "react-redux";
import { Container, MenuItem, Select, Stack, Typography } from "@mui/material";
import LoadingOverlay from "./LoadingOverlay";
import DataGridPagination from "./DataGridPagination";
import { useState } from "react";
import { getAllOrders } from "../store/asyncThunk/orderThunk";

const OrdersPanel = () => {
  const pageSize = 11;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.orders);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("createdAt:asc");
  const rowData = orders.map((item) => {
    const {
      title,
      status,
      currency,
      sedaliaFee,
      paymentSentToCompany,
      barcode,
      itemCount,
      createdAt: created,
      updatedAt: updated,
      isApproved,
      _id: id,
    } = item;

    return {
      title,
      status,
      currency,
      sedaliaFee,
      paymentSentToCompany,
      barcode,
      itemCount,
      createdAt: new Date(created).toLocaleDateString(),
      updatedAt: new Date(updated).toLocaleDateString(),
      isApproved,
      id,
    };
  });

  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "paymentSentToCompany",
      headerName: "Paid",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "barcode",
      headerName: "Barcode",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "itemCount",
      headerName: "Count",
      flex: 1,
      headerAlign: "center",
      align: "center",
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
  ];

  useEffect(() => {
    dispatch(getAllOrders({ limit, sort }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    dispatch(getAllOrders({ limit: e.target.value, sort }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    dispatch(getAllOrders({ sort: e.target.value }));
  };
  if (loading) return <LoadingOverlay />;
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "766px", display: "flex", justifyContent: "center", flexDirection: "column", gap: 2 }}>
      <Typography variant="h3" textAlign="center" sx={{ fontWeight: "bold", color: "white" }}>
        All Item orders
      </Typography>

      <Stack direction="row" justifyContent="start" alignItems="center" gap={4} sx={{ width: "100%" }}>
        <Stack justifyContent="center" alignItems="center" gap={2}>
          <Typography variant="h6">Limit</Typography>
          <Select value={limit} label="Limit" onChange={handleLimitChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </Stack>
        <Stack justifyContent="center" alignItems="center" gap={2}>
          <Typography variant="h6">Sort</Typography>
          <Select value={sort} label="Sort Data" onChange={handleSortChange}>
            <MenuItem value="createdAt:asc">Most Recent</MenuItem>
            <MenuItem value="createdAt:desc">Least Recent</MenuItem>
          </Select>
        </Stack>
      </Stack>
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

export default OrdersPanel;
