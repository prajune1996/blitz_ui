
import React from "react";
import PrimarySearchAppBar from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import { Grid } from "@mui/material"
import ActionBox from "./components/ActionBox/ActionBox";
import Sidebar from "./components/Sidebar/Sidebar";
import DataTable from "./components/DataTable/DataTable";

export default function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Grid container spacing={2} style={{ padding: "30px 30px 0 30px" }}>
        <SearchBox />
        <ActionBox />
        <Sidebar />
        <DataTable />
      </Grid>
    </>
  )
}
