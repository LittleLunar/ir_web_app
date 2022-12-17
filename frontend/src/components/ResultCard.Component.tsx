import { Theme } from "@emotion/react";
import { Box, Card, SxProps, Typography } from "@mui/material";
import React from "react";
import { IMovie } from "../models/movie.model";

interface IProps<T> {
  sx?: SxProps<Theme>;
  data: T;
}

const ResultCard = ({ sx, data }: IProps<IMovie>) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        width: 166,
        height: 233,
        ...sx,
      }}
    >
      <img src={data.boxart} alt={data.title} />
    </Box>
  );
};

export default ResultCard;
