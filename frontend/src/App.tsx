import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Stack, TextField } from "@mui/material";
import GridViewResult from "./components/GridViewResult.Component";
import SearchInput from "./components/SearchInput.Component";
import ListViewResult from "./components/ListViewResult.Component";
import useMovieSearch from "./hooks/useMovieSearch";
import { IPaginationParam } from "./apis/types/general.type";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [paginationParam, setPaginationParam] = useState<IPaginationParam>({
    page: 1,
    size: 50,
  });
  const {
    result: movies,
    loading,
    error,
  } = useMovieSearch({ name: searchInput, paginationParam: paginationParam });
  const onSearchInputChange = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchInput(event.target.value);
    setPaginationParam((prev) => ({ ...prev, page: 1 }));
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        // gap: 4,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "10vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          label="Search"
          variant="standard"
          fullWidth
          value={searchInput}
          onChange={onSearchInputChange}
        />
      </Box>
      <ListViewResult data={[...new Array(40).map((e) => 1)]} />
      {/* <ListViewResult data={movies} /> */}
      {/* <GridViewResult data={[...new Array(40).map((e) => 1)]} /> */}
      {/* <GridViewResult data={movies} /> */}
    </Container>
  );
}

export default App;
