import { Theme } from "@emotion/react";
import { Box, Card, SxProps } from "@mui/material";
import React from "react";

interface IProps {
  sx?: SxProps<Theme>;
  data: any;
}

const ResultCard = ({ sx, data }: IProps) => {
  return (
    <Box
      sx={
        sx ?? {
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "cyan",
        }
      }
    ></Box>
  );
};

export default ResultCard;
