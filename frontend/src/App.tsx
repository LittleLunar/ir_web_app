import React, { useState } from "react";
import { Box, Container, TextField } from "@mui/material";
import GridViewResult from "./components/GridViewResult.Component";
import useMovieSearch from "./hooks/useMovieSearch";
import { IPaginationParam } from "./apis/types/general.type";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [paginationParam, setPaginationParam] = useState<IPaginationParam>({
    page: 1,
    size: 10000,
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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        // gap: 4,
        flexDirection: "column",
        padding: "0px 5vw 0px 5vw",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          paddingTop: "1vh",
          backgroundColor: "rgb(60, 60, 60)",
          height: "10vh",
          width: "90vw",
        }}
      >
        <TextField
          label="Search"
          variant="standard"
          fullWidth
          inputProps={{ style: { color: "white", width: "100%" } }}
          color="error"
          value={searchInput}
          onChange={onSearchInputChange}
        />
      </Box>
      <GridViewResult data={movies} />
      {/* <GridViewResult data={movies} /> */}
    </Box>
  );
}

export default App;
