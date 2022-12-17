import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import React from "react";

interface IProps {
  sx?: SxProps<Theme>;
}

const SearchInput = ({ sx = {} }: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid green",
        height: "10vh",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    ></Box>
  );
};

export default SearchInput;
