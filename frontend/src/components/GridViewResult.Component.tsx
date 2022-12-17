import { Theme } from "@emotion/react";
import { Box, Grid, SxProps } from "@mui/material";
import React from "react";
import ResultCard from "./ResultCard.Component";

interface IProps {
  sx?: SxProps<Theme>;
  data?: any[];
}
const GridViewResult = ({ sx, data = [] }: IProps) => {
  return (
    <Grid container gap={5} sx={sx ?? { flex: 1 }}>
      {data.map((e, idx) => (
        <Grid
          item
          sx={{
            borderRadius: "8px",
            width: 250,
            height: 300,
            overflow: "hidden",
            "&:hover": {
              transform: "scale(1.2)",
              zIndex: 2,
            },
          }}
        >
          <ResultCard data={e} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridViewResult;
