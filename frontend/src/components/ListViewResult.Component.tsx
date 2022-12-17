import { Theme } from "@emotion/react";
import { List, ListItem, ListItemText, SxProps } from "@mui/material";
import React from "react";

interface IProps {
  sxContainer?: SxProps<Theme>;
  sxItem?: SxProps<Theme>;
  data?: any[];
}
const ListViewResult = ({
  sxContainer = {},
  sxItem = {},
  data = [],
}: IProps) => {
  return (
    <List sx={sxContainer}>
      {data.map((e) => (
        <ListItem
          sx={{
            "&:hover": {
              backgroundColor: "rgba(0,0,0, 0.1)",
            },
            ...sxItem,
          }}
        >
          <ListItemText primary="Single-line item" />
        </ListItem>
      ))}
    </List>
  );
};

export default ListViewResult;
